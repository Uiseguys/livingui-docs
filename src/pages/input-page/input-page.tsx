import { Component, Listen, State } from '@stencil/core';


@Component({
    tag: 'input-page',
    styleUrl: 'input-page.scss'
})
export class InputPage {

    @State() inputResult: string = undefined;

    @Listen('onvaluechange')
    customEventHandler(event: CustomEvent): void {
        console.log('Received the custom event: ', event);
        this.inputResult = event.detail
    }

    render() {
        return (
            <div class="container">

                <h2>Input component demo</h2>

                <cwc-input label="Demo label" value={'My shiny value'}>

                </cwc-input>

                {
                    this.inputResult &&
                    <span class="mt-2">Catched event with data: {this.inputResult}</span>
                }

            </div >

        );
    }
}