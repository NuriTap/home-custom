import { OperatorFunction } from 'rxjs';
import { ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigProxy, PartialProfileGroup, Profile, ProfileProvider, ProfileSettingsComponent, ProfilesService, ProfileGroup } from 'tabby-core';
/** @hidden */
export declare class EditProfileModalComponent<P extends Profile> {
    private injector;
    private componentFactoryResolver;
    private profilesService;
    private modalInstance;
    profile: P & ConfigProxy;
    profileProvider: ProfileProvider<P>;
    settingsComponent: new () => ProfileSettingsComponent<P>;
    defaultsMode: 'enabled' | 'group' | 'disabled';
    profileGroup: PartialProfileGroup<ProfileGroup> | undefined;
    groups: PartialProfileGroup<ProfileGroup>[];
    placeholder: ViewContainerRef;
    private _profile;
    private settingsComponentInstance?;
    constructor(injector: Injector, componentFactoryResolver: ComponentFactoryResolver, profilesService: ProfilesService, modalInstance: NgbActiveModal);
    colorsAutocomplete: (text$: any) => any;
    colorsFormatter: (value: any) => any;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    groupTypeahead: OperatorFunction<string, readonly PartialProfileGroup<ProfileGroup>[]>;
    groupFormatter: (g: PartialProfileGroup<ProfileGroup>) => string;
    iconSearch: OperatorFunction<string, string[]>;
    save(): void;
    cancel(): void;
    isConnectable(): boolean;
}
