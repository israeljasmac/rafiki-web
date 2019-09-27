import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'editar-usuario.component.html'
})

export class EditarUsuarioComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    updateUser() {
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Actualización exitosa', true);
                    this.router.navigate(['login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
}
