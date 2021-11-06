"use strict";

import { EventEmitter } from "events";
import systeminfo from "systeminformation";

export default class Text extends EventEmitter {
  constructor(options, output) {
    super();
    options = options || {};
    this.output = output || {};
    this.chargingColor = options.chargingColor || "#666666";
    this.dischargingColor = options.dischargingColor || "#AAAA00";
    this.criticalThreshold = options.criticalThreshold || 30;
  }

  update() {
    systeminfo
      .battery(info => {
        let msg = info.percent + "%";
        if (!info.ischarging && info.percent !== 100) {
          if (info.timeremaining > 0) {
            msg += " (" + this.formatMinutes(info.timeremaining) + ")";
          }
          if (info.timeremaining < this.criticalThreshold) {
            this.output.critical = true;
          }
        }

        this.output.full_text = msg;
        this.output.short_text = msg;

        // Color indicating loading status
        if (info.ischarging === true) {
          this.changeColor(this.chargingColor);
        } else {
          this.changeColor(this.dischargingColor);
        }
      })
      .catch(err => {
        this.output.critical = true;
        this.output.full_text = err;
        this.output.short_text = err;
      })
      .finally(msg => {
        this.emit("updated", this, this.output);
      });
  }

  changeColor(hex) {
    if (this.output.critical !== true) {
      this.output.color = hex;
    }
  }

  formatMinutes(min) {
    let h = 0;
    if (min > 60) {
      h = Math.floor(min / 60);
      min = min % 60;
    }
    return `${this.format(h)}:${this.format(min)}`;
  }

  format(num) {
    return num < 10 ? `0${num}` : num;
  }
}
