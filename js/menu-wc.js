'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">angular-lego documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="license.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>LICENSE
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-ef077293d83f506361fc69c4c2b5a8cb"' : 'data-target="#xs-components-links-module-AppModule-ef077293d83f506361fc69c4c2b5a8cb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-ef077293d83f506361fc69c4c2b5a8cb"' : 'id="xs-components-links-module-AppModule-ef077293d83f506361fc69c4c2b5a8cb"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CoreModule-0ea140e0d8d5afa8050e3dea5617e276"' : 'data-target="#xs-components-links-module-CoreModule-0ea140e0d8d5afa8050e3dea5617e276"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CoreModule-0ea140e0d8d5afa8050e3dea5617e276"' : 'id="xs-components-links-module-CoreModule-0ea140e0d8d5afa8050e3dea5617e276"' }>
                                        <li class="link">
                                            <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CreateAccountsModule.html" data-type="entity-link">CreateAccountsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-CreateAccountsModule-5bbbe89f3aabcef0b6166182ea0c3d52"' : 'data-target="#xs-components-links-module-CreateAccountsModule-5bbbe89f3aabcef0b6166182ea0c3d52"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-CreateAccountsModule-5bbbe89f3aabcef0b6166182ea0c3d52"' : 'id="xs-components-links-module-CreateAccountsModule-5bbbe89f3aabcef0b6166182ea0c3d52"' }>
                                        <li class="link">
                                            <a href="components/CreateAccountsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateAccountsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CreateAccountsRoutingModule.html" data-type="entity-link">CreateAccountsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/FormAccountModule.html" data-type="entity-link">FormAccountModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-FormAccountModule-cb67fbada26c7b772df967a00fde0058"' : 'data-target="#xs-components-links-module-FormAccountModule-cb67fbada26c7b772df967a00fde0058"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-FormAccountModule-cb67fbada26c7b772df967a00fde0058"' : 'id="xs-components-links-module-FormAccountModule-cb67fbada26c7b772df967a00fde0058"' }>
                                        <li class="link">
                                            <a href="components/FormAccountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormAccountComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/FormAccountRoutingModule.html" data-type="entity-link">FormAccountRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoginModule-0b7d5b4541adbae4451e505dfca6f006"' : 'data-target="#xs-components-links-module-LoginModule-0b7d5b4541adbae4451e505dfca6f006"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoginModule-0b7d5b4541adbae4451e505dfca6f006"' : 'id="xs-components-links-module-LoginModule-0b7d5b4541adbae4451e505dfca6f006"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialDesignModule.html" data-type="entity-link">MaterialDesignModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/NavbarModule.html" data-type="entity-link">NavbarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NavbarModule-b5eed528c53daa7e5d64f4a87bf18f94"' : 'data-target="#xs-components-links-module-NavbarModule-b5eed528c53daa7e5d64f4a87bf18f94"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NavbarModule-b5eed528c53daa7e5d64f4a87bf18f94"' : 'id="xs-components-links-module-NavbarModule-b5eed528c53daa7e5d64f4a87bf18f94"' }>
                                        <li class="link">
                                            <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ProfileModule-b8f5c45c675f8778cc8eac0827a74047"' : 'data-target="#xs-components-links-module-ProfileModule-b8f5c45c675f8778cc8eac0827a74047"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ProfileModule-b8f5c45c675f8778cc8eac0827a74047"' : 'id="xs-components-links-module-ProfileModule-b8f5c45c675f8778cc8eac0827a74047"' }>
                                        <li class="link">
                                            <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ProfileRoutingModule.html" data-type="entity-link">ProfileRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/RegisterModule.html" data-type="entity-link">RegisterModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-RegisterModule-77dbe550e825e86eccb9c1b30defb3eb"' : 'data-target="#xs-components-links-module-RegisterModule-77dbe550e825e86eccb9c1b30defb3eb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-RegisterModule-77dbe550e825e86eccb9c1b30defb3eb"' : 'id="xs-components-links-module-RegisterModule-77dbe550e825e86eccb9c1b30defb3eb"' }>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RegisterRoutingModule.html" data-type="entity-link">RegisterRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SeeAccountsModule.html" data-type="entity-link">SeeAccountsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SeeAccountsModule-0843467e3e3a25d5d645200909cafbfb"' : 'data-target="#xs-components-links-module-SeeAccountsModule-0843467e3e3a25d5d645200909cafbfb"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SeeAccountsModule-0843467e3e3a25d5d645200909cafbfb"' : 'id="xs-components-links-module-SeeAccountsModule-0843467e3e3a25d5d645200909cafbfb"' }>
                                        <li class="link">
                                            <a href="components/SeeAccountsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeeAccountsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SeeAccountsRoutingModule.html" data-type="entity-link">SeeAccountsRoutingModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/WelcomeModule.html" data-type="entity-link">WelcomeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WelcomeModule-859e4a7bdb1e675e7717fb124bd296f8"' : 'data-target="#xs-components-links-module-WelcomeModule-859e4a7bdb1e675e7717fb124bd296f8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WelcomeModule-859e4a7bdb1e675e7717fb124bd296f8"' : 'id="xs-components-links-module-WelcomeModule-859e4a7bdb1e675e7717fb124bd296f8"' }>
                                        <li class="link">
                                            <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WelcomeComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WelcomeRoutingModule.html" data-type="entity-link">WelcomeRoutingModule</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Role.html" data-type="entity-link">Role</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RegisterService.html" data-type="entity-link">RegisterService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AuthGuardService.html" data-type="entity-link">AuthGuardService</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/Career.html" data-type="entity-link">Career</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
            <li class="chapter">
                <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
            </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
