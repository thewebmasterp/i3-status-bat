# i3-status-bat

i3-status module for showing the battery status of your laptop.

Based on [i3-status-starter](https://github.com/fehmer/i3-status-starter)

## Basic usage:
```yml
blocks:
  - name: battery
    module: i3-status-battery
```

## Advanced usage:
```yml
blocks:
  - name: battery
    module: i3-status-battery
    chargingColor:              # The color of the text when the device is *charging*
    chargingChar:               # The character in front of the module when *charging*
    dischargingColor:           # The color of the text when the device is *discharging*
    dischargingChar:            # The character in front of the module when *discharging*
    criticalChargeChar:         # The character in front of the module when the charge is critical
    criticalThreshold:          # Below what percentage should the charge be considered critical?
```

Note: I forked this module from [i3-status-battery](https://github.com/mintao/i3-status-battery) and improved it by
publishing it to npm, writing better documentation and adding a few more features. 