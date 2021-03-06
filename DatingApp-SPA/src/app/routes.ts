import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailComponent } from './member/member-detail/member-detail.component';
import { MemberdetailResolver } from './_resolvers/members-detail.resolver';
import { MemberListResolver } from './_resolvers/members-List.resolver';
export const appRoutes: Routes = [
{path: '', component: HomeComponent},
{
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
        {path: 'lists', component: ListsComponent},
        { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
        { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberdetailResolver}},
        { path: 'messages', component: MessagesComponent}
    ]

},

{path: '**', redirectTo: '', pathMatch: 'full'}

];
