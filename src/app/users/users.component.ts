import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IUser } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';
import { debounceTime, startWith, switchMap, takeWhile } from 'rxjs/operators';
import { UserCardComponent } from '../components/user-card/user-card.component';
import { LoaderComponent } from '../components/loader/loader.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, UserCardComponent, LoaderComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = signal<IUser[]>([]);
  searchForm!: FormGroup;
  componentAlive!: boolean;
  userService = inject(UserService);
  isLoading = signal(false);
  ngOnInit() {
    this.componentAlive = true;
    this.searchForm = new FormGroup({
      username: new FormControl('', []),
    });
    this.searchForm.controls['username'].valueChanges
      .pipe(
        startWith(''),
        debounceTime(500),
        takeWhile(() => !!this.componentAlive),
        switchMap((query) => {
          this.isLoading.set(true);
          return this.userService.searchUsers(query);
        })
      )
      .subscribe((users) => {
        this.users.set(users);
        this.isLoading.set(false);
      });
  }
}

