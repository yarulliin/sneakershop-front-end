import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

import { Roles } from "../../enums/app.enum";
import { user } from "../../functions/app.functions";
import { AuthUserData } from "../../interfaces/app.interfaces";

@Directive({
  selector: '[role]'
})
export class RoleDirective implements OnInit {
  @Input() public role: Roles;

  private userInfo: AuthUserData;

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<unknown>,
  ) { }

  public ngOnInit(): void {
    this.userInfo = user();

    this.renderPermissionsTemplate();
  }

  private renderPermissionsTemplate(): void {
    this.role === this.userInfo?.role
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }
}
