import React, { Component } from "react";
import t from "tcomb-form";
import transform from "tcomb-json-schema";

/*
const schema = {
  "type": "array",
  "title": "Box Sizes",
  "description": "Items will be packed into these boxes based on item dimensions and volume. Outer dimensions will be passed to USPS, whereas inner dimensions will be used for packing. Items not fitting into boxes will be packed individually.",
  "items": {
    "type": "object",
    "title": "Box",
    "properties": {
      "name": {
        "type": "string",
        "title": "Name"
      },
      "outer_length": {
        "type": "number",
        "title": "L (in)"
      },
      "outer_width": {
        "type": "number",
        "title": "W (in)"
      },
      "outer_height": {
        "type": "number",
        "title": "H (in)"
      },
      "inner_length": {
        "type": "number",
        "title": "Inner L (in)"
      },
      "inner_width": {
        "type": "number",
        "title": "Inner W (in)"
      },
      "inner_height": {
        "type": "number",
        "title": "Inner H (in)"
      },
      "box_weight": {
        "type": "number",
        "title": "Weight of Box (lbs)"
      },
      "max_weight": {
        "type": "number",
        "title": "Max Weight (lbs)"
      },
      "is_letter": {
        "type": "boolean",
        "title": "Letter"
      }
    }
  }
};

*/ /*

const schema = {
  "title": "USPS Services",
  "type": "object",
  "properties": {
    "first_class": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name",
          "description": "First-Class Mail® (USPS)"
        },
        "sub_services": {
          "type": "object",
          "title": "Sub services",
          "properties": {
            "0": {
              "type": "object",
              "title": "First-Class Mail® Parcel",
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "title": "Enabled"
                },
                "adjustment": {
                  "type": "number",
                  "title": "Price Adjustment ($)",
                  "description": "N/A"
                },
                "adjustment_percent": {
                  "type": "number",
                  "title": "Price Adjustment (%)",
                  "description": "N/A"
                }
              }
            },
            "12": {
              "type": "object",
              "title": "First-Class™ Postcard Stamped",
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "title": "Enabled"
                },
                "adjustment": {
                  "type": "number",
                  "title": "Price Adjustment ($)",
                  "description": "N/A"
                },
                "adjustment_percent": {
                  "type": "number",
                  "title": "Price Adjustment (%)",
                  "description": "N/A"
                }
              }
            },
            "15": {
              "type": "object",
              "title": "First-Class™ Large Postcards",
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "title": "Enabled"
                },
                "adjustment": {
                  "type": "number",
                  "title": "Price Adjustment ($)",
                  "description": "N/A"
                },
                "adjustment_percent": {
                  "type": "number",
                  "title": "Price Adjustment (%)",
                  "description": "N/A"
                }
              }
            }
          }
        }
      }
    },
    "express_mail": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "title": "Name",
          "description": "Priority Mail Express™ (USPS)"
        },
        "sub_services": {
          "type": "object",
          "title": "Sub services",
          "properties": {
            "2": {
              "type": "object",
              "title": "Priority Mail Express™ Hold for Pickup",
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "title": "Enabled"
                },
                "adjustment": {
                  "type": "number",
                  "title": "Price Adjustment ($)",
                  "description": "N/A"
                },
                "adjustment_percent": {
                  "type": "number",
                  "title": "Price Adjustment (%)",
                  "description": "N/A"
                }
              }
            },
            "3": {
              "type": "object",
              "title": "Priority Mail Express™",
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "title": "Enabled"
                },
                "adjustment": {
                  "type": "number",
                  "title": "Price Adjustment ($)",
                  "description": "N/A"
                },
                "adjustment_percent": {
                  "type": "number",
                  "title": "Price Adjustment (%)",
                  "description": "N/A"
                }
              }
            },
            "23": {
              "type": "object",
              "title": "Priority Mail Express™ Sunday/Holiday",
              "properties": {
                "enabled": {
                  "type": "boolean",
                  "title": "Enabled"
                },
                "adjustment": {
                  "type": "number",
                  "title": "Price Adjustment ($)",
                  "description": "N/A"
                },
                "adjustment_percent": {
                  "type": "number",
                  "title": "Price Adjustment (%)",
                  "description": "N/A"
                }
              }
            }
          }
        }
      }
    }
  }
};
*/

const schema = {
  "type": "object",
  "title": "USPS",
  "description": "The USPS extension obtains rates dynamically from the USPS API during cart/checkout.",
  "required": [],
  "definitions": {
    "countries": {
      "type": "string",
      "enum": [
        "AU",
        "GB",
        "US"
      ],
      "enumNames": [
        "Australia",
        "United Kingdom (UK)",
        "United States (US)"
      ]
    }
  },
  "properties": {
    "enabed": {
      "type": "boolean",
      "title": " Enable/Disable",
      "description": "Enable this shipping method",
      "default": false
    },
    "title": {
      "type": "string",
      "title": "Method Title",
      "description": "This controls the title which the user sees during checkout.",
      "default": ""
    },
    "origin": {
      "type": "string",
      "title": "Origin Postcode",
      "description": "Enter the postcode for the sender.",
      "default": ""
    },
    "countries": {
      "title": "Specific Countries",
      "$ref": "#/definitions/countries"
    },
    "method_availability": {
      "type": "object",
      "title": "Method Availability",
      "properties": {
        "filter": {
          "type": "string",
          "enum": [
            "all",
            "specific",
            "excluding"
          ],
          "enumNames": [
            "All Countries",
            "Specific Countries",
            "Exclude Specific Countries"
          ]
        }
      },
      "oneOf": [
        {
          "properties": {
            "filter": {
              "enum": [ "all" ]
            }
          }
        },
        {
          "properties": {
            "filter": {
              "enum": [ "specific" ]
            },
            "countries": {
              "title": "Specific Countries",
              "$ref": "#/definitions/countries"
            }
          }
        },
        {
          "properties": {
            "filter": {
              "enum": [ "excluding" ]
            },
            "countries": {
              "title": "Specific Countries",
              "$ref": "#/definitions/countries"
            }
          }
        }
      ],
      "x-hints": { "form": { "selector": "filter" } }
    }
  }
};

const Type = transform( schema );
const options = {};
const value = {};

class Settings extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			options: options || {},
			value: value || {}
		};
	}

	onSubmit( evt ) { console.log( evt );
		evt.preventDefault();
		const v = this.refs.form.getValue();
		if (v) {
			console.log(v);
		}
	}

	onOrderChange() {

		const v = this.refs.form.getValue();

		this.setState({
			options: {
				order: [
					"express_mail",
					"first_class"
				]
			},
			value: v
		});
	}

	render() {
		return(
			<form onSubmit={this.onSubmit.bind(this)}>
				<t.form.Form
					ref="form"
					type={Type}
					options={this.state.options}
					value={this.state.value}
				/>
				<div className="form-group">
					<button type="submit" className="btn btn-primary">Save</button>
				</div>
				<button onClick={this.onOrderChange.bind(this)} className="btn btn-secondary">Change Order</button>
			</form>
		);
	}

}

export default Settings;