import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("../../features/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "calendary",
    loadChildren: () =>
      import("../../features/calendary/calendary.module").then(
        (m) => m.CalendaryModule
      ),
  },
  {
    path: "event",
    loadChildren: () =>
      import("../../features/event/event.module").then((m) => m.EventModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("../../features/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("../../features/login/login.module").then((m) => m.LoginModule),
  },
];
