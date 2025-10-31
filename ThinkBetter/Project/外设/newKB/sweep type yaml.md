
```YAML
meta:

  engine: 4.1.0

# U is a predefined unit of measure that means 19.05mm, which is MX spacing (u is 19.00mm)

units:

  # Proxy Spacing Variables

  kx: cx

  ky: cy

  # Padding Variables

  px: kx + 2

  py: ky + 2

points:

  zones:

    matrix:

      anchor.shift: [50,-100] # Fix KiCad placement

      columns:

        pinky:

        ring:

        middle:

        index:

        inner:

        more:

          rows.num.skip: true

          rows.top.skip: true

          rows.home.skip: true

      rows:

        bottom:

        home:

        top:

        num:

pcbs:

  simple_split:

    template: kicad8

    footprints:

      keys:

        what: ceoloide/switch_mx

        where: true

        params:

          from: GND

          to: "{{name}}"

          reversible: true

          solder: true

          include_keycap: true

      mcu:

        what: ceoloide/mcu_nice_nano

        where:

          - ref: matrix_inner_top

            shift: [1U, 0.5U]
```