import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ProfileFacadeService } from "./services/profile-facade.service";

import { User } from "./utils/interfaces/profile-info.interfaces";
import { Observable } from "rxjs";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoComponent implements OnInit {
  public user$: Observable<User> = this.profileFacadeService.profile$;

  date = new Date()

  public isEdit: boolean = false;

  constructor(
    private profileFacadeService: ProfileFacadeService
  ) { }

  public ngOnInit(): void {
    this.profileFacadeService.getOrders();
  }

  public toggleEdit(): void {
    this.isEdit = !this.isEdit;
  }

  public update(data: User): void {
    this.profileFacadeService.updateUser(data);
  }
}
