import { Component, Prop, State } from '@stencil/core';
import '@stencil/router';
import 'bootstrap.native/dist/bootstrap-native-v4';

@Component({
  tag: 'stencil-bs-demo-page',
  styleUrl: 'stencil-bs-demo-page.scss'
})
export class StencilBsDemoPage {
  @Prop() root = '/';
  @State() navigationShown: boolean = false;
  @State() navContainerShown: boolean = false;
  @State() isIconsShown: boolean = true;

  @State() navigationContainerNumber: number = 0;


  components = [
    {
      componentName: 'input-page',
      url: '/input',
      title: 'Input Component',
      isHiden: false
    },
    {
      componentName: 'textarea-page',
      url: '/textarea',
      title: 'Textarea Component',
      isHiden: false
    },

    {
      url: '/autocomplete-select',
      title: 'AutocompleteSelect Component',
      componentName: 'autocomplete-select-page'
    },
    {
      url: '/dropdown',
      title: 'Dropdown Component',
      componentName: 'dropdown-page'
    },
    {
      url: '/video',
      title: 'Video Component',
      componentName: 'video-player-page'
    },
    {
      url: '/inlineedit',
      title: 'Inlineedit Component',
      componentName: 'inlineedit-page'
    },
    {
      url: '/inlineedit-textarea',
      title: 'Inlineedit textarea Component',
      componentName: 'inlineedit-textarea-page'
    },

  ];


  // @Listen('shownavigationtoggle')
  // navToggleHandler(e: CustomEvent) {

  //   if (e.detail === this.navigationContainerNumber) {
  //     this.navigationShown = false
  //   } else {
  //     this.navigationContainerNumber = e.detail
  //     this.navigationShown = true
  //   }

  //   // this.navigationShown = !this.navigationShown
  // }


  // @Listen('shownavigationcontainertoggle')
  // containerToggle() {
  //   this.navContainerShown = !this.navContainerShown
  // }
  // @Listen('naviconstoggle')
  // iconsToggle() {
  //   this.isIconsShown = !this.isIconsShown
  // }
  // @Listen('navigationcomponentnumber')
  // customEventHandler(event: CustomEvent) {
  //   this.navigationContainerNumber = event.detail;
  // }

  render() {



    return [
      // (
      //   this.navigationShown && this.navigationContainerNumber === 1 &&


      //   <cwc-navigation isCollapsed={this.navContainerShown}>

      //     <div slot="primary-actions">

      //       <cwc-navigation-global-item
      //         titleText={'Title text'}
      //         icon="./assets/icon/sharp_send_white_48dp.png" />
      //       <cwc-navigation-global-item
      //         titleText={'Title text'}
      //         icon="./assets/icon/sharp_check_circle_outline_white_18dp.png" />
      //       <cwc-navigation-global-item isActive={true}
      //         titleText={'Title text'}
      //         icon="./assets/icon/baseline_add_white_18dp.png" />

      //     </div>


      //     <div slot="secondary-actions">
      //       <cwc-navigation-global-item
      //         titleText={'Secondary action'}
      //         icon="./assets/icon/sharp_send_white_48dp.png" />
      //     </div>


      //     <div slot="container-actions">
      //       <navigation-title text="Nav Title"
      //         icon="./assets/icon/sharp_flip_to_front_white_18dp.png" />


      //       <navigation-item-group text="Actions group">

      //         <div slot="navigation-items">

      //           <navigation-item showIcon={this.isIconsShown} text="Navigation item" />
      //           <navigation-item showIcon={this.isIconsShown} isActive={true} text={'Active nav item with subtext'}
      //             subText="Subtext of nav item" />
      //           <navigation-item showIcon={this.isIconsShown} text="Basic link" />

      //           <navigation-item showIcon={this.isIconsShown} text="With drop icon"
      //             dropIcon="./assets/icon/sharp_flip_to_front_white_18dp.png" />

      //         </div>
      //       </navigation-item-group>

      //       <navigation-item-group text="Group with separator" hasSeparator={true}>

      //         <div slot="navigation-items">
      //           <navigation-item showIcon={this.isIconsShown} text="With dropicon and subasdfastext"
      //             subText="My small subtext"
      //             icon={'./assets/icon/baseline_add_white_18dp.png'}
      //             dropIcon={'./assets/icon/sharp_flip_to_front_white_18dp.png'} />

      //           <navigation-item showIcon={this.isIconsShown} text="With dropicon and subtext"
      //             subText="My small subtext"
      //             icon={'./assets/icon/baseline_add_white_18dp.png'}
      //             dropIcon={'./assets/icon/sharp_flip_to_front_white_18dp.png'} />

      //           <navigation-item showIcon={this.isIconsShown} text="With mouse events" />
      //         </div>
      //       </navigation-item-group>

      //     </div>

      //   </cwc-navigation>

      // ),
      // (
      //   this.navigationShown && this.navigationContainerNumber === 2 &&


      //   <cwc-navigation isCollapsed={true}>

      //     <div slot="primary-actions">

      //       <h3><span class="badge badge-primary">St</span></h3>
      //       <h3><span class="badge badge-info">St</span></h3>
      //       <h3><span class="badge badge-secondary">St</span></h3>

      //     </div>


      //     <div slot="secondary-actions">
      //       <cwc-avatar name='John Do' size={42} rounded > </cwc-avatar>
      //     </div>


      //   </cwc-navigation>

      // ),
      <cwc-styles />,
      <div class={`container-fluid ${this.navigationShown ? 'with-navigation' : ''}`}>
        <div class="row">
          <div class="col-12 text-center">
            <h1>UI Library</h1>
          </div>
        </div>
        <div class="row">
          <nav class="col-2">
            <ul class="nav flex-column">
              {this.components.filter(cmp => !cmp.isHiden).map(cmp => (
                <li class="nav-item">
                  <stencil-route-link
                    url={cmp.url}
                    activeClass="active"
                    class="nav-link"
                  >
                    {cmp.title}
                  </stencil-route-link>
                </li>
              ))}
            </ul>
          </nav>
          <main class="col-10">
            <stencil-router root={this.root}>
              {this.components
                .filter(cmp => !cmp.isHiden)
                .map(cmp => (
                  <stencil-route url={cmp.url} component={cmp.componentName} />
                ))}
            </stencil-router>
          </main>
        </div>
      </div>
    ];
  }
}
