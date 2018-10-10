import { Component, State } from "@stencil/core";

@Component({
  tag: "tree-page",
  shadow: false
})
export class TreePage {
  @State() treeData: any;

  componentWillLoad() {
    this.treeData = [
      {
        moduleBlockName: 'Cisco-Zertifizierung',
        modules: [
          {
            moduleName: 'Modul 1',
            events: [
              {
                date: '15.8.2019',
                type: 'Fortbildung',
                id: 12345561
              },
              {
                date: '15.9.2019',
                type: 'Fortbildung',
                id: 12345563
              }
            ]
          },
          {
            moduleName: 'Modul 2',
            events: [
              {
                date: '15.8.2019',
                type: 'Fortbildung',
                id: 12345569
              },
              {
                date: '15.9.2019',
                type: 'Fortbildung',
                id: 12345567
              }
            ]
          }
        ]
      },
      {
        moduleBlockName: 'Mehrteilige Veranstaltung 2',
        modules: [
          {
            moduleName: 'Modul 1',
            events: [
              {
                date: '15.8.2019',
                type: 'Fortbildung',
                id: 12345561
              },
              {
                date: '15.9.2019',
                type: 'Fortbildung',
                id: 12345563
              }
            ]
          },
          {
            moduleName: 'Modul 2',
            events: [
              {
                date: '15.8.2019',
                type: 'Fortbildung',
                id: 12345569
              },
              {
                date: '15.9.2019',
                type: 'Fortbildung',
                id: 12345567
              }
            ]
          }
        ]
      }
    ];
  }

  render() {
    return (
      <div class="container pt-4">
        <h2 class="mb-4">Tree Component </h2>
        <div class="row">
          <div class="col-lg-12">
            <div class="pt-3">
              <div class="row">
                <div class="col-lg-12">
                  <h3>Usage:</h3>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-lg-12">
                  <pre><code>
                    &lt;cwc-tree data=&#123;this.treeData&#125;&gt;<br />
                      &#9;&lt;template-level-1&gt;[[=item.moduleBlockName]]&lt;/template-level-1&gt;<br />
                      &#9;&lt;template-level-2 level="modules"&gt;[[=item.moduleName]]&lt;/template-level-2&gt;<br />
                      &#9;&lt;template-level-3 level="events"&gt;[[=item.date]] [[=item.type]]&lt;/template-level-3&gt;<br />
                    &lt;/cwc-tree&gt;
                  </code></pre>

                  <hr />
                  <h3>Outputs:</h3><br/>
                  <cwc-tree data={this.treeData}>
                    <template-level-1>[[=item.moduleBlockName]]</template-level-1>
                    <template-level-2 level="modules">[[=item.moduleName]]</template-level-2>
                    <template-level-3 level="events">[[=item.date]] [[=item.type]]</template-level-3>
                  </cwc-tree>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
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
                    <td>id</td>
                    <td>string</td>
                    <td>''</td>
                    <td>Component ID</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>Required</td>
                    <td>Data to construct the Tree</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>string</td>
                    <td>''</td>
                    <td>This is to set label of tree component</td>
                </tr>
                <tr>
                    <td>interpolationRegex</td>
                    <td>regex</td>
                    <td>/\[\[=+(.*?) ?\]\]+/g</td>
                    <td>Used for templating. Default: [[= ]]</td>
                </tr>
              </tbody>
            </table>

            <p>
              The template elements, except the first template, which is the main node, must be provided
              with a 'level' attribute of which value represents a tree node.
            </p>

            <p>The following data prop array is used for this example:</p>
            <p><pre>{JSON.stringify(this.treeData, null, 5)}</pre></p>
          </div>
        </div>
      </div>
    );
  }
}
