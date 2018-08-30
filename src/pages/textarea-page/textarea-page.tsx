import { Component, Listen, State } from "@stencil/core";

@Component({
  tag: "textarea-page",
  styleUrl: "textarea-page.scss"
})
export class TextareaPage {
  @State()
  textareaResult: string = undefined;

  @Listen("onvaluechange")
  customEventHandler(event: CustomEvent): void {
    console.log("Received the custom event: ", event);
    this.textareaResult = event.detail;
  }

  render() {
    return (
      <div class="container">
        <h1>Textarea component</h1>

        <h2 class="mt-3">Overview</h2>

        <p>
          <code>CwcTextarea</code> is a component to render simple bootstrap
          textarea in your template.
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
                  <td>''</td>
                  <td>Initial value of textarea</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>
                    <code>String</code>
                  </td>
                  <td>''</td>
                  <td>Labal of the textarea</td>
                </tr>
                <tr>
                  <td>
                    <code>onvaluechange</code>
                  </td>
                  <td>
                    <code>CustomEvent</code>
                  </td>
                  <td>''</td>
                  <td>
                    Value emited every textarea change and available in{" "}
                    <code>`event.detail`</code> field.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 class="mt-3">Usage</h2>

        <p>Stencil usage: </p>

        <pre>{this.usageStencil}</pre>

        <p>
          Angular usage: <a href="http://stackblitz.com">Stackblitz demo</a>.
        </p>

        <p>Vanilla html usage: </p>

        <pre>{this.usageHtml}</pre>

        <h2 class="mt-3">Textarea component demo</h2>

        <cwc-textarea label="Demo label" value={"My shiny value"} />

        {this.textareaResult && (
          <span class="mt-2">
            Catched event with data: {this.textareaResult}
          </span>
        )}
      </div>
    );
  }

  usageStencil = `
        <cwc-textarea label="Demo label" value={"My shiny value"} />
        `;
  usageHtml = `
        <body>
            <cwc-textarea>

            </cwc-textarea>
            <ul class="output-target">
                // Results available here.
            </ul>

            <script>
                const cmp = document.querySelector('cwc-textarea')
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
