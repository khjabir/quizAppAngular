import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';
import { NotifyToastService } from './notifications/notify-toast.service';
import { QuestionsService } from './quiz/questions.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [NotifyToastService, QuestionsService]

})
export class AppComponent {

    constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

    adminUser() {
        return false;
    }
}

