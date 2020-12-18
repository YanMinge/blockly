/**
 * @fileoverview Action blocks for RaspberryPi.
 * @requires Blockly.Blocks
 * @author Kostadin Cvejoski
 */
'use strict';

goog.provide('Blockly.Blocks.raspberrypiActions');

goog.require('Blockly.Blocks');


// Light Blocks
Blockly.Blocks['robActions_led_blink'] = {
   init : function() {
       var ports = getConfigPorts('led');
       this.dependConfig = {
           'type' : 'led',
           'dropDown' : ports
        };
       this.setColour(Blockly.CAT_ACTION_RGB);
       this.appendDummyInput().appendField(Blockly.Msg.LED_BLINK).appendField(ports, 'ACTORPORT');
       this.appendValueInput('ON_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ON_TIME).setCheck('Number');
       this.appendValueInput('OFF_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OFF_TIME).setCheck('Number');
       this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_TIMES).setCheck('Number');
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setTooltip(Blockly.Msg.LED_BLINK_TOOLTIP);
   }
};

Blockly.Blocks['robActions_led_blink_frequency'] = {
   init : function() {
      var ports = getConfigPorts('led');
      this.dependConfig = {
          'type' : 'led',
          'dropDown' : ports
       };
       this.setColour(Blockly.CAT_ACTION_RGB);
       this.appendDummyInput().appendField(Blockly.Msg.LED_BLINK).appendField(ports, 'ACTORPORT');
       this.appendValueInput('FREQUENCE').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PLAY_FREQUENZ).setCheck('Number');
       this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_TIMES).setCheck('Number');
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setTooltip(Blockly.Msg.LED_BLINK_TOOLTIP);
   }
};

Blockly.Blocks['robActions_led_pulse'] = {
   init : function() {
       var ports = getConfigPorts('led');
       this.dependConfig = {
           'type' : 'led',
           'dropDown' : ports
        };
       this.setColour(Blockly.CAT_ACTION_RGB);
       this.appendDummyInput().appendField(Blockly.Msg.LED_PULSE).appendField(ports, 'ACTORPORT');
       this.appendValueInput('FADE_IN_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.FADE_IN_TIME).setCheck('Number');
       this.appendValueInput('FADE_OUT_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.FADE_OUT_TIME).setCheck('Number');
       this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_TIMES).setCheck('Number');
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setTooltip(Blockly.Msg.LED_PULSE_TOOLTIP);
   }
};

Blockly.Blocks['robActions_rgbled_blink'] = {
   init : function() {
      var ports = getConfigPorts('rgbled');
      this.dependConfig = {
         'type' : 'rgbled',
         'dropDown' : ports
       };
       this.setColour(Blockly.CAT_ACTION_RGB);
       this.appendDummyInput().appendField(Blockly.Msg.RGBLED_BLINK).appendField(ports, 'ACTORPORT');
       this.appendValueInput('ON_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ON_TIME).setCheck('Number');
       this.appendValueInput('OFF_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OFF_TIME).setCheck('Number');
       this.appendValueInput('ON_COLOR').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ON_COLOR).setCheck('Colour');
       this.appendValueInput('OFF_COLOR').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OFF_COLOR).setCheck('Colour');
       this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_TIMES).setCheck('Number');
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setTooltip(Blockly.Msg.LED_BLINK_TOOLTIP);
   }
};

Blockly.Blocks['robActions_rgbled_blink_frequency'] = {
   init : function() {
      var ports = getConfigPorts('rgbled');
      this.dependConfig = {
         'type' : 'rgbled',
          'dropDown' : ports
       };
       this.setColour(Blockly.CAT_ACTION_RGB);
       this.appendDummyInput().appendField(Blockly.Msg.RGBLED_BLINK).appendField(ports, 'ACTORPORT');
       this.appendValueInput('FREQUENCE').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PLAY_FREQUENZ).setCheck('Number');
       this.appendValueInput('ON_COLOR').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ON_COLOR).setCheck('Colour');
       this.appendValueInput('OFF_COLOR').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OFF_COLOR).setCheck('Colour');
       this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_TIMES).setCheck('Number');
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setTooltip(Blockly.Msg.LED_BLINK_TOOLTIP);
   }
};

Blockly.Blocks['robActions_rgbled_pulse'] = {
   init : function() {
     var ports = getConfigPorts('rgbled');
     this.dependConfig = {
         'type' : 'rgbled',
         'dropDown' : ports
      };
       this.setColour(Blockly.CAT_ACTION_RGB);
       this.appendDummyInput().appendField(Blockly.Msg.RGBLED_PULSE).appendField(ports, 'ACTORPORT');
       this.appendValueInput('FADE_IN_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.FADE_IN_TIME).setCheck('Number');
       this.appendValueInput('FADE_OUT_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.FADE_OUT_TIME).setCheck('Number');
       this.appendValueInput('ON_COLOR').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ON_COLOR).setCheck('Colour');
       this.appendValueInput('OFF_COLOR').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OFF_COLOR).setCheck('Colour');
       this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_TIMES).setCheck('Number');
       this.setPreviousStatement(true);
       this.setNextStatement(true);
       this.setTooltip(Blockly.Msg.LED_PULSE_TOOLTIP);
   }
};

// Motor Blocks
Blockly.Blocks['robActions_motor_on_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('motor');
        this.dependConfig = {
                'type' : 'motor',
                'dropDown' : ports
        };
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_FOREWARD, 'FOREWARD' ], [ Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.ACTION_MOTOR).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.ON).appendField(ports, 'MOTORPORT').appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number');

        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);

    }
};

Blockly.Blocks['robActions_motor_on_for_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('motor');
        this.dependConfig = {
                'type' : 'motor',
                'dropDown' : ports
        };
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_FOREWARD, 'FOREWARD' ], [ Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.ACTION_MOTOR).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.ON).appendField(ports, 'MOTORPORT').appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number');
        this.appendValueInput('VALUE').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSOR_TIME + ' ' + Blockly.Msg.SENSOR_UNIT_S).setCheck('Number');
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);

    }
};

Blockly.Blocks['robActions_motor_stop_rasp'] = {
    /**
     * Stop this motor.
     *
     * @constructs robActions_motor_stop
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {String/dropdown}
     *            MODE - Float or Non Float
     * @returns immediately
     * @memberof Block
     */
    init : function() {

        var ports = getConfigPorts('motor');
        this.dependConfig = {
                'type' : 'motor',
                'dropDown' : ports
        };
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.MOTOR_STOP).appendField(Blockly.Msg.ACTION_MOTOR).appendField(ports, 'MOTORPORT');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_STOP_TOOLTIP);
    }
};

Blockly.Blocks['robActions_robot_on_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('robot');
        this.dependConfig = {
                'type' : 'robot',
                'dropDown' : ports
        };
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_FOREWARD, 'FOREWARD' ], [ Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD' ],
                                                   [ Blockly.Msg.LEFT, 'LEFT' ], [ Blockly.Msg.RIGHT, 'RIGHT' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.ACTION_ROBOT).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.ON).appendField(ports, 'MOTORPORT').appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number');

        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);

    }
};

Blockly.Blocks['robActions_robot_on_for_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('robot');
        this.dependConfig = {
                'type' : 'robot',
                'dropDown' : ports
        };
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MOTOR_FOREWARD, 'FOREWARD' ], [ Blockly.Msg.MOTOR_BACKWARD, 'BACKWARD' ],
                                                   [ Blockly.Msg.LEFT, 'LEFT' ], [ Blockly.Msg.RIGHT, 'RIGHT' ] ]);
        this.appendValueInput('POWER').appendField(Blockly.Msg.ACTION_ROBOT).appendField(dropdown, 'DIRECTION').appendField(Blockly.Msg.ON).appendField(ports, 'MOTORPORT').appendField(Blockly.Msg.MOTOR_SPEED).setCheck('Number');
        this.appendValueInput('VALUE').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.SENSOR_TIME + ' ' + Blockly.Msg.SENSOR_UNIT_S).setCheck('Number');
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);

    }
};

Blockly.Blocks['robActions_robot_stop_rasp'] = {
    /**
     * Stop this motor.
     *
     * @constructs robActions_motor_stop
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {String/dropdown}
     *            MODE - Float or Non Float
     * @returns immediately
     * @memberof Block
     */
    init : function() {

        var ports = getConfigPorts('robot');
        this.dependConfig = {
                'type' : 'robot',
                'dropDown' : ports
        };
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendDummyInput().appendField(Blockly.Msg.MOTOR_STOP).appendField(Blockly.Msg.ACTION_ROBOT).appendField(ports, 'MOTORPORT');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_STOP_TOOLTIP);
    }
};


Blockly.Blocks['robActions_servo_motor_on_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('servo');
        this.dependConfig = {
                'type' : 'servo',
                'dropDown' : ports
        };
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MIN, 'MIN' ], [ Blockly.Msg.MID, 'MID' ], [ Blockly.Msg.MAX, 'MAX' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.SERVO_MOTOR).appendField(dropdown, 'POSITION').appendField(Blockly.Msg.ON).appendField(ports, 'MOTORPORT');

        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);
    }
};

Blockly.Blocks['robActions_servo_motor_set_rasp'] = {
    /**
     * Set current power of this motor (not used).
     *
     * @constructs robActions_setPower
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER new
     * @returns immediately
     * @memberof Block
     */
    init : function() {
      var ports = getConfigPorts('servo');
        this.dependConfig = {
                'type' : 'servo',
                'dropDown' : ports
        };
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.appendValueInput('POWER').appendField(Blockly.Msg.SERVO_MOTOR).appendField(Blockly.Msg.SET).appendField(Blockly.Msg.POWER).appendField(ports, 'MOTORPORT').setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_SETPOWER_TOOLTIP);
    }
};

Blockly.Blocks['robActions_angularservo_motor_on_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('angularservo');
        this.dependConfig = {
                'type' : 'angularservo',
                'dropDown' : ports
        };
        var dropdown = new Blockly.FieldDropdown([ [ Blockly.Msg.MIN, 'MIN' ], [ Blockly.Msg.MID, 'MID' ], [ Blockly.Msg.MAX, 'MAX' ] ]);
        this.appendDummyInput().appendField(Blockly.Msg.ANGULAR_SERVO).appendField(dropdown, 'POSITION').appendField(Blockly.Msg.ON).appendField(ports, 'MOTORPORT');

        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);
    }
};

Blockly.Blocks['robActions_angularservo_motor_on_for_rasp'] = {
    /**
     * Turn motor on with specific power.
     *
     * @constructs robActions_motor_on
     * @this.Blockly.Block
     * @param {String/dropdown}
     *            MOTORPORT - A, B, C, or D
     * @param {Number}
     *            POWER relative - -100-100
     * @returns immediately
     * @memberof Block
     */
    init : function() {
        var ports = getConfigPorts('angularservo');
        this.dependConfig = {
                'type' : 'angularservo',
                'dropDown' : ports
        };

        this.appendValueInput('POWER').appendField(Blockly.Msg.SET + " " + Blockly.Msg.ANGULAR_SERVO).appendField(ports, 'MOTORPORT').appendField(Blockly.Msg.TO+ ' °').setCheck('Number');

        this.setColour(Blockly.CAT_ACTION_RGB);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.MOTOR_ON_TOOLTIP);

    }
};






// TONE BLOCKS

Blockly.Blocks['robActions_rasp_play_tone'] = {
    /**
     * Play a tone.
     *
     * @constructs robActions_play_tone
     * @this.Blockly.Block
     * @param {Number}
     *            FREQUENCE Frequence
     * @todo
     * @param {Number}
     *            DURATION Time in milliseconds
     * @returns after execution (after DURATION)
     * @memberof Block
     */
    init : function() {
        // this.setHelpUrl(Blockly.Msg.PLAY_TONE_HELPURL);
        this.setColour(Blockly.CAT_ACTION_RGB);
            var dropDownPorts = getConfigPorts('tonalbuzzer');
            this.dependConfig = {
                'type' : 'tonalbuzzer',
                'dropDown' : dropDownPorts
            };
        this.appendValueInput('FREQUENCE').appendField(Blockly.Msg.PLAY).appendField(dropDownPorts, 'ACTORPORT').appendField(Blockly.Msg.PLAY_FREQUENZ).setCheck('Number');
        this.appendValueInput('DURATION').setCheck('Number').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.PLAY_DURATION);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setBlocking(true);
        this.setTooltip(Blockly.Msg.PLAY_TONE_TOOLTIP);
        // this.setHelp(new Blockly.Help(Blockly.Msg.PLAY_TONE_HELP));
    }
};

Blockly.Blocks['robActions_rasp_buzzer_beep'] = {
    /**
     * Play a tone.
     *
     * @constructs robActions_play_tone
     * @this.Blockly.Block
     * @param {Number}
     *            FREQUENCE Frequence
     * @todo
     * @param {Number}
     *            DURATION Time in milliseconds
     * @returns after execution (after DURATION)
     * @memberof Block
     */
    init : function() {
        // this.setHelpUrl(Blockly.Msg.PLAY_TONE_HELPURL);
        this.setColour(Blockly.CAT_ACTION_RGB);
            var dropDownPorts = getConfigPorts('buzzer');
            this.dependConfig = {
                'type' : 'buzzer',
                'dropDown' : dropDownPorts
            };
        this.appendDummyInput().appendField(Blockly.Msg.BUZZER_BEEP).appendField(dropDownPorts, 'ACTORPORT');
        this.appendValueInput('ON_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.ON_TIME).setCheck('Number');
        this.appendValueInput('OFF_TIME').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.OFF_TIME).setCheck('Number');
        this.appendValueInput('N_TIMES').setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.Msg.N_BEEPS).setCheck('Number');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setBlocking(true);
        this.setTooltip(Blockly.Msg.BUZZER_BEEP_TOOLTIP);
        // this.setHelp(new Blockly.Help(Blockly.Msg.PLAY_TONE_HELP));
    }
};

Blockly.Blocks['robActions_rasp_buzzer_on'] = {
    /**
     * Turn bricklight on.
     *
     * @constructs robActions_rasp_buzzer_on
     * @this.Blockly.Block

     * @returns immediately
     * @memberof Block
     */
    init : function() {

        this.setColour(Blockly.CAT_ACTION_RGB);
        // this.setInputsInline(true);

        var dropdownBuzzerState = new Blockly.FieldDropdown([ [ Blockly.Msg.BUZZER_ON, 'ON' ], [ Blockly.Msg.BUZZER_TOGGLE, 'TOGGLE' ],
                [ Blockly.Msg.BUZZER_OFF, 'OFF' ] ]);


          var dropDownPorts = getConfigPorts('buzzer');
          this.dependConfig = {
              'type' : 'buzzer',
              'dropDown' : dropDownPorts
          };
        this.appendDummyInput().appendField(Blockly.Msg.BUZZER).setAlign(Blockly.ALIGN_RIGHT).appendField(dropDownPorts, 'ACTORPORT').appendField(dropdownBuzzerState, 'MODE');

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.BUZZER_ON_TOOLTIP);
    }
};

// General Blocks

Blockly.Blocks['robActions_write_gpio'] = {
    init : function() {
        this.setColour(Blockly.CAT_ACTION_RGB);
        this.dropDownPorts = getConfigPorts('digitalin');
        var that = this;
        var valueType = new Blockly.FieldDropdown([ [ Blockly.Msg.MODE_DIGITAL, 'DIGITAL' ] ], function(option) {
            if (option && this.sourceBlock_.getFieldValue('MODE') !== option) {
                that.updatePins_(option);
            }
        });
        var values = new Blockly.FieldDropdown([ [ Blockly.Msg.ON, 'ON' ], [ Blockly.Msg.TOGGLE, 'TOGGLE' ], [ Blockly.Msg.OFF, 'OFF' ]  ]);
        this.protocol_ = 'DIGITAL';
        this.dependConfig = {
            'type' : this.protocol_,
            'dropDown' : this.dropDownPorts
        };
        this.appendDummyInput().appendField(Blockly.Msg.PIN_WRITE).appendField(valueType, 'MODE').appendField(Blockly.Msg.ACTION_IN).appendField(this.dropDownPorts, 'ACTORPORT').appendField(values, 'VALUE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(function() {
            return Blockly.Msg['ACTOR_' + that.getFieldValue('MODE') + 'IN_TOOLTIP'] || 'ACTOR_' + that.getFieldValue('MODE') + 'IN_TOOLTIP';
        });
        this.updatePins_('DIGITAL');
    },
    mutationToDom : function() {
        var container = document.createElement('mutation');
        container.setAttribute('protocol', this.protocol_);
        return container;
    },
    domToMutation : function(xmlElement) {
        var input = xmlElement.getAttribute('protocol');
        this.protocol_ = input;
        this.updatePins_(this.protocol_);
    },
    updatePins_ : function(option) {
    	this.protocol_ = option;
        var configBlockName = option.toLowerCase() + 'in';
        var dropDownPorts = getConfigPorts(configBlockName);
        this.dependConfig.type = configBlockName;
        this.dropDownPorts.menuGenerator_ = dropDownPorts.menuGenerator_;
        this.dropDownPorts.arrow_ && this.dropDownPorts.arrow_.replaceChild(document.createTextNode(' '), this.dropDownPorts.arrow_.childNodes[0]);
        if (this.dropDownPorts.arrow_ && this.dropDownPorts.menuGenerator_.length > 1) {
            this.dropDownPorts.arrow_.replaceChild(document.createTextNode(' ' + Blockly.FieldDropdown.ARROW_CHAR), this.dropDownPorts.arrow_.childNodes[0]);
        }
        this.dropDownPorts.setValue(this.dropDownPorts.menuGenerator_[0][0]);
    }
};
