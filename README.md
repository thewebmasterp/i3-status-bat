# i3-status-bat

[i3-status](https://github.com/fehmer/i3-status) module for showing the battery status of your laptop.

## Basic usage:
```yml
blocks:
  - name: battery
    module: i3-status-bat
```

## Advanced usage:
```yml
blocks:
  - name: battery
    module: i3-status-bat
    chargingColor: '#a6cc33'      # The color of the text when the device is charging
    chargingChar: '🔌'          # The character in front of the module when charging
    dischargingColor: '#c38418' # The color of the text when the device is discharging
    dischargingChar: '🔋'       # The character in front of the module when discharging
    criticalChargeChar: '⚠️'    # The character in front of the module when the charge is critical
    criticalThreshold: 30       # Below what percentage should the charge be considered critical?
```

Learn more about how to work with it at [i3-status](https://github.com/fehmer/i3-status) and specifically, [this](https://github.com/fehmer/i3-status#user-content-configuration) section.



Note: I forked this module from [i3-status-battery](https://github.com/mintao/i3-status-battery) and improved it by
publishing it to [npm](), writing better documentation and adding a few more features.
Based on [i3-status-starter](https://github.com/fehmer/i3-status-starter)