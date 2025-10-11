
```YAML
meta:

  engine: 4.1.0

points:

  zones:

    matrix:

      #anchor:

        #rotate: 5

      columns:

        pinky:

        ring.key.stagger: 0.66U

        middle.key.stagger: 0.25U

        index.key.stagger: -0.25U

        inner.key.stagger: -0.15U

        #index:

        #inner:

      rows:

        bottom.padding: U

        home.padding: U

        top.padding: U

        #bottom:

        #home:

        #top:

    thumbfan:

      anchor:

        ref: matrix_index_bottom

        shift: [0.66U,-1.25U]

        rotate: -10

      columns:

        tucky:

          key.name: thumb_tucky

        reachy:

          key.spread: U

          key.splay: -15

          key.origin: [-0.5U,-0.5U]

          key.name: thumb_reachy

  mirror:

    ref: matrix_inner_home

    distance: 60
```