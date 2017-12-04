import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";
import { AddNewComponent } from "./pages/addNew/addNew.component";

export const routes = [
  { path: "", component: LoginComponent },
  { path: "list", component: ListComponent },
  { path: "addNew", component: AddNewComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent,
  AddNewComponent
];