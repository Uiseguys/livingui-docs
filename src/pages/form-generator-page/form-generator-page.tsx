import { Component, State } from '@stencil/core';

@Component({
    tag: 'form-generator-doc-page',
})
export class FormGeneratorDocPage {
  selectProps: any;
  autocompleteProps: any;
  vegetablesProps: any;

  @State() schema: any;
  @State() form: any;

  componentWillLoad() {
    this.schema = {
      "type": "object",
      "properties": {
        "checkbox": {
          "$id": "data/properties/checkbox",
          "type": "boolean",
          "title": "Checkbox",
          "description": "Check Me",
          'readonly': true,
          "groupTitle": "General",
          "order": 1,
          "default": null
        },
        "title": {
          "$id": "data/properties/title",
          "type": "string",
          "title": "Title",
          "description": "Please provide a title for this",
          'readonly': true,
          "order": 2,
          "default": null
        },
        "authorFirstName": {
          "$id": "data/properties/authorFirstName",
          "type": "string",
          "title": "First Name",
          "description": "Please provide your first name",
          'readonly': true,
          "groupTitle": "General",
          "order": 3,
          "default": null
        },
        "authorLastName": {
          "$id": "data/properties/authorLastName",
          "type": "string",
          "title": "Last Name",
          "description": "Please provide your last name",
          'readonly': true,
          "groupTitle": "General",
          "order": 4,
          "default": null
        },
        "description": {
          "$id": "data/properties/description",
          "type": "string",
          "title": "Description",
          "description": "Please provide a long description",
          'readonly': true,
          "groupTitle": "General",
          "order": 5,
          "default": null
        },
        "textarea": {
          "$id": "data/properties/textarea",
          "type": "string",
          "title": "Textarea Description",
          "description": "Textarea Description",
          'readonly': true,
          "groupTitle": "Basic Information",
          "order": 4,
          "default": null
        },
        "select": {
          "$id": "data/properties/select",
          "type": "string",
          "title": "Select",
          "description": "Select Description",
          'readonly': true,
          "groupTitle": "Basic Information",
          "order": 3,
          "enum": ["Automatic", "Manual"],
          "default": null
        },
        'numberInput': {
            '$id': '/properties/numberInput',
            'title': 'Number Input',
            'type': 'number',
            'default': 10
        },
        "autocomplete": {
          "$id": "data/properties/autocomplete",
          "type": "array",
          "title": "Autocomplete",
          "description": "Autocomplete Decription",
          "groupTitle": "Basic Information",
          "order": 2,
          "items": {
            "$id": "/properties/autocomplete/items",
            "type": "object",
            "enum": [
              {
                "type": 'country',
                "data": {
                  "name": 'Austria',
                  "capital": 'Vienna'
                }
              },
              {
                "type": 'country',
                "data": {
                  "name": 'Australia',
                  "capital": 'Canberra'
                }
              },
              {
                "type": 'country',
                "data": {
                  "name": 'Argentina',
                  "capital": 'Buenos Aires'
                }
              }
            ]
          },
          "default": null
        },
        "vegetables": {
          "$id": "data/properties/vegetables",
          "type": "array",
          "title": "Vegetables",
          "description": "Vegetables Decription",
          "groupTitle": "Basic Information",
          "order": 1,
          "items": { "$ref": "#/definitions/veggie" },
          "default": null
        }
      },
      "required": [
        "checkbox",
        "title",
        "authorFirstName",
        "authorLastName",
        "description",
        "textarea",
        "select",
        "numberInput",
        "autocomplete",
        "vegetables"
      ],
      "definitions": {
        "veggie": {
          "$id": "data/properties/vegetables#/definitions/veggie",
          "type": "object",
          "properties": {
            "veggieName": {
              "type": "string",
              "description": "The name of the vegetable."
            },
            "veggieLike": {
              "type": "boolean",
              "description": "Do I like this vegetable?"
            }
          },
          "required": [ "veggieName", "veggieLike" ]
        }
      }
    };

    this.form = {
      "checkbox": false,
      "title": "My Title",
      "authorFirstName": "John",
      "authorLastName": "Doe",
      "description": "Lorem ipsum",
      "textarea": "Lorem ipsum",
      "select": "Select",
      "numberInput": null,
      "autocomplete": [],
      "vegetables": [
        {
          "veggieName": "potato",
          "veggieLike": true
        },
        {
          "veggieName": "broccoli",
          "veggieLike": false
        }
      ]
    };

    this.selectProps = JSON.stringify({
      asCombobox: false,
      btnLeftPosition: false
    });
    this.autocompleteProps = JSON.stringify({
      searchKey: "data.name"
    });
    this.vegetablesProps = JSON.stringify({
      searchKey: "veggieName"
    });
  }

  render() {
    return (
      <div class="container pt-4">
        <h2 class="mb-4">Form Generator Component </h2>
        <div class="row">
          <div class="col-lg-12">
            <div class="pt-3">
              <div class="row">
                <div class="col-lg-12">
                  <h3>Usage </h3>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-lg-12">
                  <pre><code>
                      &lt;cwc-form-generator schema=&#123;this.schema&#125; value=&#123;this.form&#125;&gt;<br />
                        &#9;&lt;cwc-switch for="boolean"&gt;&lt;/cwc-switch&gt;<br />
                        &#9;&lt;cwc-inlineedit for="string"&gt;&lt;/cwc-inlineedit&gt;<br />
                        &#9;&lt;cwc-inlineedit-textarea for="data/properties/description"&gt;&lt;/cwc-inlineedit-textarea&gt;<br />
                        &#9;&lt;cwc-textarea for="data/properties/textarea"&gt;&lt;/cwc-textarea&gt;<br />
                        &#9;&lt;cwc-select<br />
                          &#9;&#9;for="data/properties/select"<br />
                          &#9;&#9;props=&#123;this.selectProps&#125;<br />
                        &#9;&gt;&lt;/cwc-select&gt;<br />
                        &#9;&lt;cwc-number-input for="number"&gt;&lt;/cwc-number-input&gt;<br />
                        &#9;&lt;cwc-autocomplete-select<br />
                          &#9;&#9;for="array"<br />
                          &#9;&#9;props=&#123;this.autocompleteProps&#125;<br />
                        &#9;&gt;&lt;/cwc-autocomplete-select&gt;<br />
                        &#9;&lt;cwc-autocomplete-select<br />
                          &#9;&#9;for="data/properties/vegetables"<br />
                          &#9;&#9;props=&#123;this.vegetablesProps&#125;<br />
                        &#9;&gt;&lt;/cwc-autocomplete-select&gt;<br />
                      &lt;/cwc-form-generator&gt;
                  </code></pre>

                  <hr />
                  <h3>Outputs:</h3><br/>
                  <cwc-form-generator schema={this.schema} value={this.form}>
                    <cwc-switch for="boolean" />
                    <cwc-inlineedit for="string" />
                    <cwc-inlineedit-textarea for="data/properties/description" />
                    <cwc-textarea for="data/properties/textarea" />
                    <cwc-select for="data/properties/select" props={this.selectProps} />
                    <cwc-number-input for="number"></cwc-number-input>
                    <cwc-autocomplete-select for="array" props={this.autocompleteProps} />
                    <cwc-autocomplete-select for="data/properties/vegetables" props={this.vegetablesProps} />
                  </cwc-form-generator>
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
                    <td>schema</td>
                    <td>Object</td>
                    <td>Required</td>
                    <td>Json-Schema Object</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>Object</td>
                    <td>Required</td>
                    <td>Form Value Object</td>
                </tr>
                <tr>
                    <td>onSubmit</td>
                    <td>Event</td>
                    <td></td>
                    <td>Function callback upon submitting the form, passing an event as a param.</td>
                </tr>
              </tbody>
            </table>
            <p>The Form Generator will generate a form, based on a given Json Schema, using the following components:</p>
            <ul>
              <li>
                <code>&#9;&lt;cwc-switch for="boolean"&gt;&lt;/cwc-switch&gt;</code><br />
                <small><i>Will generate an input type checkbox. Used for type boolean schema prop.</i></small>
              </li>
              <li>
                <code>&#9;&lt;cwc-inlineedit for="string"&gt;&lt;/cwc-inlineedit&gt;</code><br />
                <small><i>Will generate an input type text. Used for type string schema prop.</i></small>
              </li>
              <li>
                <code>&#9;&lt;cwc-inlineedit-textarea for="string"&gt;&lt;/cwc-inlineedit-textarea&gt;</code><br />
                <small><i>Will generate a textarea element. Used for type string schema prop.</i></small>
              </li>
              <li>
                <code>&#9;&lt;cwc-textarea for="string"&gt;&lt;/cwc-textarea&gt;</code><br />
                <small><i>Will generate a textarea element. Used for type string schema prop.</i></small>
              </li>
              <li>
                <code>
                  &#9;&lt;cwc-select
                    &#9;&#9;for="string"
                    &#9;&#9;props=&#123;this.selectProps&#125;
                  &#9;&gt;&lt;/cwc-select&gt;
                </code><br />
                <small><i>Will generate a select element. Used for type string schema prop with enum array property.</i></small><br />
                <small><i>It can be passed a JSON.stringifiy() object to the props attribute.</i></small><br />
                <small><i>
                  <code>
                    const selectProps = JSON.stringify(&#123;
                      &#9;asCombobox: boolean,
                      &#9;btnLeftPosition: boolean
                    &#125;);
                  </code>
                </i></small>
              </li>
              <li>
                <code>&#9;&lt;cwc-number-input for="number"&gt;&lt;/cwc-number-input&gt;</code><br />
                <small><i>Will generate an input type number. Used for type number schema prop.</i></small>
              </li>
              <li>
                <code>
                  &#9;&lt;cwc-autocomplete-select
                    &#9;&#9;for="array"
                    &#9;&#9;props=&#123;this.autocompleteProps&#125;
                  &#9;&gt;&lt;/cwc-autocomplete-select&gt;
                </code><br />
                <small><i>Will generate an autocomplete dropdown select element. Used for type array schema prop.</i></small><br />
                <small><i>It must be passed a JSON.stringifiy() object to the props attribute.</i></small><br />
                <small><i>
                  <code>
                    const autocompleteProps = JSON.stringify(&#123;
                      &#9;searchKey: "data.name"
                    &#125;);
                  </code>
                </i></small>
              </li>
            </ul>

            <h3>Schema Object:</h3>
            <p>The following Schema Object is used for this example:</p>
            <p><pre>{JSON.stringify(this.schema, null, 5)}</pre></p>

            <h3>Form Object:</h3>
            <p>The actual form object that respects the schema.</p>
            <p>The inputs can have predefined values or be empty and filled in by the user or dynamicly within the code.</p>
            <p>The following Form Object is used for this example:</p>
            <p><pre>{JSON.stringify(this.form, null, 5)}</pre></p>
          </div>
        </div>
      </div>
    );
  }
}
