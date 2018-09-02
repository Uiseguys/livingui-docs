import { Component, Listen, State } from "@stencil/core";

@Component({
  tag: "input-page",
  styleUrl: "input-page.scss"
})
export class InputPage {
  @State()
  inputResult: string = undefined;

  @Listen("onvaluechange")
  customEventHandler(event: CustomEvent): void {
    console.log("Received the custom event: ", event);
    this.inputResult = event.detail;
  }

  render() {
    return (
      <div class="container">
        <h1>Input component</h1>

        <h2 class="mt-3">Overview</h2>

        <p>
          <code>CwcInput</code> is a component to render simple bootstrap input
          in your template.
        </p>

        <h2 class="mt-3">Props</h2>

        <div class="row">
          <div class="col-lg-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Param</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>value</td>
                  <td>
                    <code>String</code>
                  </td>
                  <td><code>''</code></td>
                  <td>Initial value of input</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>
                    <code>String</code>
                  </td>
                  <td><code>''</code></td>
                  <td>Label of the input</td>
                </tr>
                <tr>
                  <td>isRequired</td>
                  <td>
                    <code>boolean</code>
                  </td>
                  <td><code>false</code></td>
                  <td>Is input required</td>
                </tr>
                <tr>
                  <td>isReadonly</td>
                  <td>
                    <code>boolean</code>
                  </td>
                  <td><code>false</code></td>
                  <td>Is input read only</td>
                </tr>
                <td>
                  <code>onvaluechange</code>
                </td>
                <td>
                  <code>CustomEvent</code>
                </td>
                <td><code>''</code></td>
                <td>
                  Value emited every input change and available in{" "}
                  <code>`event.detail`</code> field.
                  </td>
              </tbody>
            </table>
          </div>
        </div>

        <h2 class="mt-3">Usage</h2>

        <p>Stencil usage: </p>

        <pre>{this.usageStencil}</pre>

        <p>
          Angular usage: <a href="https://stackblitz.com/edit/livingui-cwc-input-demo">Stackblitz demo</a>.
        </p>

        <p>Vanilla html usage: </p>

        <pre>{this.usageHtml}</pre>

        <h2 class="mt-3">Input component demo</h2>

        <cwc-input label="Demo label" value={"My shiny value"} />

        {this.inputResult && (
          <span class="mt-2">Catched event with data: {this.inputResult}</span>
        )}
      </div>
    );
  }

  usageStencil = `
        <cwc-input label="Demo label" value={"My shiny value"} />
        `;
  usageHtml = `
        <body>
            <cwc-input>

            </cwc-input>
            <ul class="output-target">
                // Results available here.
            </ul>

            <script>
                const cmp = document.querySelector('cwc-input')
                cmp.value = 'Shiny value'
                cmp.label = 'Input label'


                var outputTarget = document.querySelector('ul.output-target')

                cmp.addEventListener('onvaluechange', e => {
                    const newChild = document.createElement('LI')

                    newChild.textContent = 'Catched an event with data "' + event.detail + '"'
                    outputTarget.appendChild(newChild)
                })


            </script> 
        </body>

        `;
}
