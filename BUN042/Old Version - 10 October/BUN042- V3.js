(function(window, utils) {
    var categories = {
        'DRILLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/drills'
        },
        'POWER SAWS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/power-saws'
        },
        'BATTERIES & CHARGERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/batteries-chargers'
        },
        'WORKLIGHTS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/worklights'
        },
        'WORKSITE RADIOS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/worksite-radios'
        },
        'CORDLESS FANS & BLOWERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/fans-blowers'
        },
        'PRESSURE WASHERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/pressure-washers'
        },
        'SANDERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/sanders'
        },
        'AIR COMPRESSORS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/air-compressors'
        },
        'PORTABLE GENERATORS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/power-tools/portable-generators'
        },
        'MEASURING TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/measuring-tools'
        },
        'SAWS, KNIVES & CUTTING TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/saws-knives-cutting-tools'
        },
        'SOCKETS, SPANNERS & WRENCHES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/sockets-spanners-wrenches'
        },
        'CLAMPS, PLIERS & VICES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/clamps-pliers-vices'
        },
        'HAMMERS & WRECKERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/hammers-wreckers'
        },
        'SCREWDRIVERS & HEX KEYS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/screwdrivers-hex-keys'
        },
        'CHISELS, FILES & SHARPENING': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/chisels-files-sharpening'
        },
        'MASONRY & PLASTER TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/masonry-plaster-tools'
        },
        'STAPLES & RIVET GUNS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/hand-tools/staples-rivet-guns'
        },
        'DRILL BITS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/drill-bits'
        },
        'DRILLING ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/drilling-accessories'
        },
        'POWER SAW BLADE & ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/power-saw-blade-accessories'
        },
        'SANDPAPER, DISCS & PADS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/sandpaper-discs-pads'
        },
        'GRINDER ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/grinder-accessories'
        },
        'WELDING & SOLDERING ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/welding-soldering-accessories'
        },
        'AIR TOOL PARTS & ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/air-tool-parts-accessories'
        },
        'MULTI TOOL ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/multi-tool-accessories'
        },
        'ROUTER BITS & ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/router-bits'
        },
        'ROTARY TOOL ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/tool-accessories/rotary-tool'
        },
        'MIG WELDERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/welding-soldering/mig-welders',
        },
        'ARC WELDERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/welding-soldering/arc-welders'
        },
        'SOLDERING IRONS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/welding-soldering/soldering'
        },
        'PLASMA CUTTERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/welding-soldering/plasma-cutters'
        },
        'INVERTER WELDERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/welding-soldering/inverter-welders'
        },
        'SAFETY ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/accessories'
        },
        'EAR PROTECTION': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/ear-protection'
        },
        'FACE & HEAD PROTECTION': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/face-head-protection'
        },
        'FIRST AID KITS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/first-aid-kits'
        },
        'WORK & SAFETY GLOVES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/gloves'
        },
        'KNEE PADS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/knee-pads'
        },
        'RESPIRATORS & DUST MASKS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/respirators-dust-masks'
        },
        'SAFETY GLASSES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/safety-glasses'
        },
        'SAFETY WORKWEAR': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/safety-workwear'
        },
        'HI VIS & SAFETY VESTS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/safety-equipment-workwear/vests'
        },
        'CAR ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/automotive/car-accessories'
        },
        'CAR BATTERIES & ELECTRICAL': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/automotive/car-batteries-electrical'
        },
        'LUBRICANTS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/automotive/lubricants'
        },
        'CAR TRAILERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/automotive/trailers'
        },
        'TRAILER ACCESSORIES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/automotive/trailer-accessories'
        },
        'TOOL CHESTS & TROLLEYS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/tool-trolley-chests'
        },
        'PLASTIC TOOL BOXES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/plastic-tool-boxes'
        },
        'TOOL KITS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/tool-kits'
        },
        'CARGO & SITE BOXES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/cargo-site-boxes'
        },
        'METAL TOOL BOXES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/metal-tool-boxes'
        },
        'TOOL BAG & BELTS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/bag-belts'
        },
        'WORK BENCHES & SAW HORSES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/storage/work-benches-saw-horses'
        },
        'FLARING TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/plumbing/flaring-tools'
        },
        'PIPE & STRAP WRENCHES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/plumbing/pipe-strap-wrenches'
        },
        'PIPE & TUBE BENDERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/plumbing/pipe-tube-benders'
        },
        'PIPE & TUBE CUTTING': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/plumbing/pipe-tube-cutting'
        },
        'TAP SPANNERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/plumbing/tap-spanners'
        },
        'TAP RESEATING TOOLS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/plumbing/tap-reseating-tools'
        },
        'BOW SHACKLES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/bow-shackles'
        },
        'ELECTRIC HOISTS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/electric-hoists'
        },
        'LIFTING BAGS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/lifting-bags'
        },
        'LIFTING CHAINS & CHAIN BLOCKS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/lifting-chains-chain-blocks'
        },
        'LIFTING SLINGS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/lifting-slings'
        },
        'LOAD BINDERS': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/load-binders'
        },
        'PLATFORM SCALES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/platform-scales'
        },
        'WINCHES': {
            'img': '/19542c93bd1d432293de4104f8a51e42.png',
            'mobileimg' : '/5a49e91240824b0b8b87b9fa9ce7a322.png',
            'url': '/our-range/tools/heavy-lifting-equipment/winches'
        },
        'DOORS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f3ee959f814148afb4e7601e3166f129.jpg',
            'url': '/our-range/building-hardware/building-construction/doors'
        },
        'GARAGES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/157138c4c8cd4a8fa7ac5e7648197e1a.jpg',
            'url': '/our-range/building-hardware/building-construction/garages'
        },
        'LADDERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/53763c9f71d1463f84efec9503c9dcb8.jpg',
            'url': '/our-range/building-hardware/building-construction/ladders'
        },
        'WINDOWS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/a7129c3dda3a45699bf0a73800c02ffc.jpg',
            'url': '/our-range/building-hardware/building-construction/windows'
        },
        'VENTILATION': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/d5ad1b55a2c64429af0dab00011d42fb.jpg',
            'url': '/our-range/building-hardware/building-construction/ventilation'
        },
        'INSULATION': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/346ff8b8c22243e298403f80af6b636f.jpg',
            'url': '/our-range/building-hardware/building-construction/insulation'
        },
        'BRICKS & BLOCKS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/92574d729ccf466c934d3aee1ccc8aa0.jpg',
            'url': '/our-range/building-hardware/building-construction/bricks-blocks'
        },
        'SITE MANAGEMENT & SAFETY': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/bb4f5a2296e8426596ab84e959eda954.jpg',
            'url': '/our-range/building-hardware/building-construction/site-management-safety'
        },
        'WATERPROOFING & SEALING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/0aee589b0c614c4b86e72e84956c7f97.jpg',
            'url': '/our-range/building-hardware/building-construction/waterproofing-sealing'
        },
        'BUILDERS PLASTIC': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/2c53c104bb3249ab8e30216de84f5baa.jpg',
            'url': '/our-range/building-hardware/building-construction/builders-plastic'
        },
        'HARDWOOD DECKING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1d945d05766e401aa4fbea0ce83ec5c4.jpg',
            'url': '/our-range/building-hardware/decking/hardwood-decking'
        },
        'COMPOSITE DECKING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/3b85a348045543cf8c89eeda2bb20438.jpg',
            'url': '/our-range/building-hardware/decking/composite-decking'
        },
        'TREATED PINE DECKING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f5f22e941e2b4a6e8e20a42181408458.png',
            'url': '/our-range/building-hardware/decking/treated-pine-decking'
        },
        'MODULAR DECKING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/2bb4f68fec6b4b79a2c4e428696b7f15.jpg',
            'url': '/our-range/building-hardware/decking/modular-decking'
        },
        'STAIR SETS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/23d84dd382744240b770c5a44e9e10d0.jpg',
            'url': '/our-range/building-hardware/decking/stair-sets'
        },
        'HANDRAIL': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/296aaab9ac5e45dabb3585dd81785643.jpg',
            'url': '/our-range/building-hardware/decking/handrail'
        },
        'SLEEPERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/aee14696c016454fae310baa75acdab0.jpg',
            'url': '/our-range/building-hardware/landscape/sleepers'
        },
        'TREATED PINE POLES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/0b3680af4e2043f58987b9c714ec5778.png',
            'url': '/our-range/building-hardware/landscape/treated-pine-poles'
        },
        'STRUCTURAL TREATED PINE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/829ab2524a5f4a12a2b36cb702841f30.jpg',
            'url': '/our-range/building-hardware/landscape/structural-treated-pine'
        },
        'PRIMED TREATED STRUCTURAL TIMBER': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/948d4de4c3314c4da2c65ced434f12ad.jpg',
            'url': '/our-range/building-hardware/landscape/primed-treated-structural-timber'
        },
        'GARDEN EDGING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/90a9ea0bd2a5463695aa541ad7e3f4bd.jpg',
            'url': '/our-range/building-hardware/landscape/garden-edging'
        },
        'POSTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/e88bc66080c946c9a5996a1ad0d9b363.png',
            'url': '/our-range/building-hardware/landscape/posts'
        },
        'STAIR SETS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/88d2cc5841084d72869e21f4e5b36fa4.png',
            'url': '/our-range/building-hardware/landscape/stair-sets'
        },
        'SCREENING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/9dcb78da9414491bbd8cf142fc54d2b5.jpg',
            'url': '/our-range/building-hardware/fencing/screening'
        },
        'PICKETS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/ac059506cad348df9fe610a39afc3c08.png',
            'url': '/our-range/building-hardware/fencing/pickets'
        },
        'BRUSH FENCING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/fb9642c228ec4e7da0052c9ec1bc4a52.jpg',
            'url': '/our-range/building-hardware/fencing/brush'
        },
        'GATES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/c6a249af37a5479b864091499ac9bc14.jpg',
            'url': '/our-range/building-hardware/fencing/gates'
        },
        'FENCE POSTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/ad49e29b767d4792bd5ccd58c66a36c1.png',
            'url': '/our-range/building-hardware/fencing/fence-posts'
        },
        'FENCE PALINGS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/bd313359c693438b836ee6e031480df6.jpg',
            'url': '/our-range/building-hardware/fencing/palings'
        },
        'FENCE CAPPING & LATTICE SURROUND': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/6da99d151e3641ad86b7100d829e2e49.jpg',
            'url': '/our-range/building-hardware/fencing/fence-capping-lattice-surround'
        },
        'ALUMINIUM FENCING & GATES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1fd1366b9aa04b17835764643103f852.jpg',
            'url': '/our-range/building-hardware/fencing/aluminium'
        },
        'GLASS FENCING & GATES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/d8bbbf493b864746b81660ce51c6d760.jpg',
            'url': '/our-range/building-hardware/fencing/glass'
        },
        'STEEL FENCING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/148ef8af77714e9093e75f42b2faf818.jpg',
            'url': '/our-range/building-hardware/fencing/steel'
        },
        'POSTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/4b40732256a140a3b3c03a75f6e64fbd.jpg',
            'url': '/our-range/building-hardware/timber/posts'
        },
        'STRUCTURAL TIMBER': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f21c954d66d644908aa96cc0c5e5ad69.jpg',
            'url': '/our-range/building-hardware/timber/structural'
        },
        'STRUCTURAL FLOORING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/5095c7edc6654cf8840be2afd0d99682.png',
            'url': '/our-range/building-hardware/timber/structural-flooring'
        },
        'MOULDINGS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/7948e25fd8d0488abf44c8d05821058b.jpg',
            'url': '/our-range/building-hardware/timber/mouldings'
        },
        'DRESSED TIMBER': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/db5e88bb42b94affaad5292493837993.jpg',
            'url': '/our-range/building-hardware/timber/dressed-timber'
        },
        'LINING BOARDS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/85efe29e2f244561b3aed03ab727f0ce.png',
            'url': '/our-range/building-hardware/timber/lining-boards'
        },
        'HERITAGE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/709f40d553bb46c5be20a138d3a850a5.jpg',
            'url': '/our-range/building-hardware/timber/heritage'
        },
        'STRUCTURAL PLYWOOD': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/ad62655ce3144ab480dfd48ea1df8a43.png',
            'url': '/our-range/building-hardware/building-boards/structural-plywood'
        },
        'NON STRUCTURAL PLYWOOD': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/b81f74cba9514a6ba3f5731319b51585.jpg',
            'url': '/our-range/building-hardware/building-boards/non-structural-plywood'
        },
        'MERCH PINE (NON STRUCTURAL)': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/d04498064aa14cf9af72e5de21b9c6d5.jpg',
            'url': '/our-range/building-hardware/building-boards/merch-pine-non-structural'
        },
        'CLADDING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/ecabb6a5f4f14aa6abd3ec501578e483.jpg',
            'url': '/our-range/building-hardware/building-boards/cladding'
        },
        'PARTICLE BOARD': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/b805dccf370c46b0baa457a069cdf960.png',
            'url': '/our-range/building-hardware/building-boards/particleboard'
        },
        'MDF': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/0a8042daa6f14b50aa6430a80a48e9d5.jpg',
            'url': '/our-range/building-hardware/building-boards/mdf'
        },
        'MELAMINE & VENEER': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/3d1a37e177cd47a584795f240beca1cc.jpg',
            'url': '/our-range/building-hardware/building-boards/melamine'
        },
        'BRACE BOARDS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f0e9683174e145faa7f997c279c6aec3.png',
            'url': '/our-range/building-hardware/building-boards/brace-boards'
        },
        'MASONITE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/91b471840f9d42bd949b65eb4f3e1f05.jpg',
            'url': '/our-range/building-hardware/building-boards/masonite'
        },
        'PEGBOARD': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/e138630726f84c299f828bfd57e86d8a.jpg',
            'url': '/our-range/building-hardware/building-boards/pegboard'
        },
        'POLYCARBONATE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/3876383d41f14e51a15628a684ad6666.jpg',
            'url': '/our-range/building-hardware/roofing/polycarbonate'
        },
        'STEEL': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/03979955c03b448996dd6aee2984a606.jpg',
            'url': '/our-range/building-hardware/roofing/steel'
        },
        'CANOPY': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/6fcafeaed41a449f824d43d6b015eabf.jpg',
            'url': '/our-range/building-hardware/roofing/canopy'
        },
        'FLASHING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/593a72c5898842dd97d4e4831ac15108.jpg',
            'url': '/our-range/building-hardware/roofing/flashing'
        },
        'CEMENT PRODUCTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/147c66818b6c4e91aa5dde74b3eebf1c.jpg',
            'url': '/our-range/building-hardware/cement-concreting/cement-products'
        },
        'CONCRETE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/455c3622a86042ebac05bab3eb4ab01c.jpg',
            'url': '/our-range/building-hardware/cement-concreting/concrete'
        },
        'REINFORCING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f7cb752263f1434dbe9ca54191ed59a7.jpg',
            'url': '/our-range/building-hardware/cement-concreting/reinforcing'
        },
        'LINTELS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/2a9910bb194d41579db4e8c83a587592.png',
            'url': '/our-range/building-hardware/steel-aluminium-sections/lintels'
        },
        'ALUMINIUM EXTRUSIONS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/eec4664c521140ca83ac5c5666533cc5.jpg',
            'url': '/our-range/building-hardware/steel-aluminium-sections/aluminium-extrusions'
        },
        'STEEL CLADDING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/d1ec1984053e4d2ea60fc143c90cccf8.jpg',
            'url': '/our-range/building-hardware/steel-aluminium-sections/steel-cladding'
        },
        'STEEL SECTIONS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/616bf05ae65e454d9d17639bfb3fa18f.png',
            'url': '/our-range/building-hardware/steel-aluminium-sections/steel-sections'
        },
        'DOOR FURNITURE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/e4359bccba7442d8addf3350f11bff56.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-furniture'
        },
        'DOOR SECURITY': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/c50cefdd4c6540dea347fd43e5fe29f4.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-security'
        },
        'DOOR CLOSERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/5b4613dffd2c4e208ca59830370bb0c0.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-closers'
        },
        'DOOR & WINDOW SEALS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/6e65deb8cd594c83b6e924347a0b8775.png',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-window-seals'
        },
        'DOOR STOPS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/7878ae3763d847059795dd90b749cea6.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-stops'
        },
        'DOOR TRACK': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1362c6370c0a4f75a641cfe29c51671e.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-track'
        },
        'WINDOW HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f7a3748ca66443f48163fc114fa2f09d.png',
            'url': '/our-range/building-hardware/door-window-gate-hardware/window'
        },
        'CABINET HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/243e23889b7144ffa71768b6f9f0dd9f.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/cabinet'
        },
        'FLY SCREENS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/9477b5205dcb46f7986b1ce046b493f9.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/fly-screens'
        },
        'GATE HARDWARE': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/8a4c5bd7f5b6485191853d8e4efd2d2e.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/gate'
        },
        'SAFES & CASHBOXES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/2f2fda6cceb248d395e7773f23d3aa46.jpg',
            'url': '/our-range/building-hardware/general-hardware/safes-cashboxes'
        },
        'ELECTRONIC SECURITY & ALARMS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/b0f5827b4a764444a5588cde74711f25.jpg',
            'url': '/our-range/building-hardware/general-hardware/electronic-security-alarms'
        },
        'PADLOCK & CABLES': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/5cdb4aff0a3c45eea7722095ccaaa8ca.png',
            'url': '/our-range/building-hardware/general-hardware/padlock-cables'
        },
        'BRACKETS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/f5a1962ad4ee4877b4f0695dd83098e8.png',
            'url': '/our-range/building-hardware/general-hardware/brackets'
        },
        'FURNITURE & FLOOR PROTECTION': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/512630c382004c07bb31db9bf5d81845.jpg',
            'url': '/our-range/building-hardware/general-hardware/furniture-floor-protection'
        },
        'CHILD SAFETY': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/1b243affad0a442491d965bc2c90f9fc.jpg',
            'url': '/our-range/building-hardware/general-hardware/child-safety'
        },
        'HOOKS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/c726485ec502470ba37742acf2b94742.jpg',
            'url': '/our-range/building-hardware/general-hardware/hooks'
        },
        'SPRINGS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/c307cb3b886d486d85e8b218a649086e.jpg',
            'url': '/our-range/building-hardware/general-hardware/springs'
        },
        'PICTURE HANGING': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/dd1c096d94a64cad8308fc596ee148fa.jpg',
            'url': '/our-range/building-hardware/general-hardware/picture-hanging'
        },
        'TIE DOWN & LOAD RESTRAINTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/d3b852830c0f4d1d9d0da397cbb35143.jpg',
            'url': '/our-range/building-hardware/general-hardware/tie-down-load-restraints'
        },
        'SCREWS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/9368b24e901d44b68f68d3d2d704ca9f.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/screws'
        },
        'BOLTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/080d73f70b664a19ac093bbe52e54359.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/bolts'
        },
        'NAILS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/41fcc8db68f8457f9463fbdec9e88001.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/nails'
        },
        'RIVETS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/ff923e3215bf4649b829ca6425b26832.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/rivets'
        },
        'WALL & FLOOR ANCHORS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/2de4c43553e24423a0667796730ba161.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/wall-floor-anchors'
        },
        'COLLATED FASTENERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/2b2687ec470047b3a9828e5023e61385.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/collated-fasteners'
        },
        'TIMBER CONNECTORS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/337d426c0799475e8f4831d21ebebe92.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/timber-connectors'
        },
        'POST SUPPORTS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/5f42721a96274626ad7ed0507991bda9.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/post-supports'
        },
        'WEDGES & SPACERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/b4d02e0b78bf47eab51247faf0743675.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/wedges-spacers'
        },
        'GENERAL FASTENERS': {
            'img': '/919d8026f3c243d68073ab8f511338c9.png',
            'mobileimg' : '/4bdf73a6b4e64085bc80fbb0bbcc8d8f.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/general-fasteners'
        },
        'INDOOR PLANT POTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/indoor-pots'
        },
        'SELF WATERING POTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/self-watering-pots'
        },
        'PLANT BASKETS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/hanging-wall-baskets'
        },
        'PLASTIC PLANT POTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/standard-plastic-pots'
        },
        'VERTICAL & WALL GARDENS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/vertical-gardens'
        },
        'PLANT STANDS & TROLLEYS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/plant-stands-trolleys'
        },
        'OUTDOOR PLANT & GARDEN POTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/outdoor-pots'
        },
        'PLANT POT & PLANTER ACCESSORIES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/pot-accessories'
        },
        'TIMBER PLANTERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pots/timber-planters'
        },
        'WATER FEATURES & FOUNTAINS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/water-features'
        },
        'GARDEN PONDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/garden-ponds'
        },
        'LETTERBOXES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/letterboxes'
        },
        'ARTIFICIAL & FAKE PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/artificial-plants'
        },
        'BIRD BATHS, HOUSES & FEEDERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/bird-baths-feeders'
        },
        'GARDEN CLOCKS & WALL ART': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/garden-clocks-wall-art'
        },
        'GARDEN LANTERNS & CANDLES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/garden-lanterns-candles'
        },
        'GARDEN STATUES & GNOMES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-decor/garden-statues-gnomes'
        },
        'FERTILISERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/gardening/fertilisers'
        },
        'POTTING MIXES, COMPOSTS, MULCHES & MANURES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/gardening/potting-mixes-composts-mulches-manures'
        },
        'GARDEN SPRAYERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/gardening/sprayers'
        },
        'COMPOSTING': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/gardening/composting'
        },
        'LAWN MOWERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/lawn-mowers'
        },
        'WHIPPER SNIPPERS & LINE TRIMMERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/line-trimmer'
        },
        'BLOWER VAC & LEAF BLOWERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/blower-vacs'
        },
        'LAWN AERATORS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/lawn-aerators'
        },
        'HEDGE TRIMMERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/hedge-trimmers'
        },
        'CHAINSAWS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/chainsaws'
        },
        'GARDEN CORDLESS COMBO KITS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/combo-kits'
        },
        'GARDEN TOOL BATTERIES & ACCESSORIES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/garden-batteries-accessories'
        },
        'GARDEN TROLLEYS & WHEELED TOOLS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/garden-trolleys-wheeled-tools'
        },
        'DIGGING TOOLS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-tools/digging-tools'
        },
        'PERGOLAS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/pergolas'
        },
        'SHEDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/sheds'
        },
        'SHED ACCESSORIES & ATTACHMENTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/shed-accessories'
        },
        'GARAGES & CARPORTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/garages-carports'
        },
        'PATIO ROOFS & COVERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/patio-roofs-covers'
        },
        'GREENHOUSE & SHADEHOUSE': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/greenhouse-shadehouse'
        },
        'RAISED GARDEN BEDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/garden-beds'
        },
        'GARDEN ARCH': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/garden-arch'
        },
        'PET ENCLOSURES & STRUCTURES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/outdoor-structures/pet-structures'
        },
        'GARDEN SCREEN': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/landscaping/garden-screen'
        },
        'PAVING, STONES & MASONRY': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/landscaping/paving-stones'
        },
        'GARDEN BED EDGING': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/landscaping/garden-edging'
        },
        'GARDEN TRELLIS & STAKES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/landscaping/plant-support'
        },
        'WIRE FENCING & FENCING POSTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/landscaping/wire-fencing-posts'
        },
        'BIRD SPIKES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pest-control/bird-spikes'
        },
        'FAKE & DECOY OWLS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pest-control/fake-decoy-owls'
        },
        'LAWN PEST & WEED CONTROL': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pest-control/pest-weed-control'
        },
        'WEED KILLER & GARDEN PEST CONTROL': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pest-control/garden-pest-weed-control'
        },
        'HOUSEHOLD PEST CONTROL': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pest-control/household-pest-control'
        },
        'PLANT PROTECTION': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/pest-control/plant-protection'
        },
        'GARDEN VEGETABLE SEEDLINGS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/vegetable-seedlings'
        },
        'HERBS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/herbs'
        },
        'FRUIT TREES & PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/fruit-trees-and-plants'
        },
        'FLOWERING PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/flowering-plants'
        },
        'COTTAGE PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/cottage-plants'
        },
        'ROSES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/roses'
        },
        'CLIMBING PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/climbing-plants'
        },
        'GROUND COVER PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/ground-cover-plant'
        },
        'HANGING BASKET PLANTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/potted-hanging-baskets'
        },
        'INDOOR PLANTS & FLOWERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/plants/indoor-house-plants'
        },
        'WATER CRYSTALS & WETTING AGENTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/wetting-agents'
        },
        'HOSES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/garden-hoses'
        },
        'HOSE FITTINGS & CONNECTORS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/hose-end-fittings'
        },
        'HOSE REELS, CARTS & HANGERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/hose-reels-hangers'
        },
        'HOSE NOZZLES, GUNS & WANDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/hose-guns-wands'
        },
        'HOSE END SPRINKLERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/hose-end-sprinklers'
        },
        'WATERING CANS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/watering-cans'
        },
        'IRRIGATION & GARDEN WATERING SYSTEM': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/irrigation'
        },
        'WATERING CONTROL': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/watering-control'
        },
        'WATER CONSERVATION & RAIN HARVESTING': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/watering-accessories/watering-conservation'
        },
        'INSTANT TURF': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/lawn/instant-turf'
        },
        'SYNTHETIC TURF': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/lawn/synthetic-turf'
        },
        'GRASS & LAWN SEEDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/lawn/seeds'
        },
        'LAWN FERTILISERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/lawn/fertiliser'
        },
        'LAWN FERTILISER SPREADERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/lawn/spreaders'
        },
        'FLOWER BULBS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/seeds-propagation/bulbs'
        },
        'SEED STARTERS & GROWING KITS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/seeds-propagation/kits'
        },
        'FLOWER SEEDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/seeds-propagation/flower'
        },
        'VEGETABLE SEEDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/seeds-propagation/vegetable'
        },
        'HERB SEEDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/seeds-propagation/herb'
        },
        'PROPAGATION EQUIPMENT': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/seeds-propagation/equipment'
        },
        'EARMUFFS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/earmuffs'
        },
        'FACE SHIELDS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/face-shields'
        },
        'PROTECTIVE CLOTHING': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/protective-clothing'
        },
        'RESPIRATORS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/respirators'
        },
        'KNEELING PADS & KNEELERS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/kneeling-pads-kneelers'
        },
        'GARDENING GLOVES': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/gloves'
        },
        'WORK BOOTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/work-boots'
        },
        'GUMBOOTS': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/gumboots'
        },
        'WORKWEAR': {
            'img': '/5f85656ebd0948e2831c5c65b67d3c45.png',
            'mobileimg' : '/83026bd1077c40aba2ac112255a0792a.png',
            'url': '/our-range/garden/garden-safety-equipment/workwear'
        },
        '2 & 3 BURNER BBQ': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/2-3-burner'
        },
        '4 & 5 BURNER BBQS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/4-5-burner'
        },
        '6 BURNER BBQ': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/6-burner'
        },
        'BUILT-IN BBQ': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/built-in-bbq'
        },
        'CAMPING STOVES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/camping-stoves'
        },
        'PIZZA OVENS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/pizza-ovens'
        },
        'SMOKER BBQS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/smoker-bbqs'
        },
        'KETTLE BBQ': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/kettle'
        },
        'PORTABLE BBQ': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/portable'
        },
        'OUTDOOR BBQ KITCHENS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/barbecue/outdoor-bbq-kitchens'
        },
        'OUTDOOR STORAGE BOXES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/outdoor-storage'
        },
        'OUTDOOR SETTINGS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/settings'
        },
        'OUTDOOR & GARDEN BENCHES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/benches'
        },
        'KIDS OUTDOOR FURNITURE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/kids-furniture'
        },
        'OUTDOOR & GARDEN CHAIRS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/chairs'
        },
        'OUTDOOR TABLES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/tables'
        },
        'OUTDOOR LOUNGE FURNITURE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/outdoor-lounge-furniture'
        },
        'CAFÉ FURNITURE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/cafe-furniture'
        },
        'OUTDOOR CUSHIONS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/cushions'
        },
        'OUTDOOR BEAN BAGS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/bean-bags'
        },
        'BRAZIERS & FIREPITS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-heating/braziers-firepits'
        },
        'FIRE STARTERS & FUELS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-heating/fuels'
        },
        'WOOD HEATERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-heating/wood'
        },
        'OUTDOOR GAS HEATERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-heating/gas'
        },
        'OUTDOOR ELECTRIC HEATERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-heating/electric'
        },
        'FIREPLACE & HEATER ACCESSORIES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-heating/accessories'
        },
        'GAZEBOS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-shade/gazebos'
        },
        'UMBRELLAS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-shade/umbrellas'
        },
        'SHADE SAILS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-shade/shade-sails'
        },
        'SHADE CLOTH': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-shade/shade-cloth'
        },
        'SHADE CLOTH FASTENERS & ACCESSORIES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-shade/accessories'
        },
        'TARPAULIN & TARPS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-shade/tarpaulin'
        },
        'SWIMMING POOLS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/swimming-pools'
        },
        'POOLS & SPA ACCESSORIES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/pools-spa-accessories'
        },
        'CHLORINE': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/chlorine'
        },
        'POOL & SPA CHEMICALS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/chemicals'
        },
        'POOL SALT': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/pool-salt'
        },
        'OUTDOOR SHOWERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/outdoor-showers'
        },
        'SWING SETS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/swing-sets'
        },
        'CUBBY HOUSES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/cubby-houses'
        },
        'SANDPITS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/sandpits'
        },
        'SLIDES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/slides'
        },
        'PLAY EQUIPMENT ACCESSORIES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/accessories'
        },
        'ICE BOXES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/coolers/ice-boxes'
        },
        'COOLER BAGS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/coolers/cooler-bags'
        },
        'ICE BRICKS & GEL PACKS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/coolers/accessories'
        },
        'MOSQUITO REPELLENT': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/insect-control/insect-repellent'
        },
        'SUNSCREEN': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/insect-control/sunscreen'
        },
        'CITRONELLA CANDLES & COILS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/insect-control/citronella-candles'
        },
        'CITRONELLA OIL & FLARES': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/insect-control/citronella-flares-oils'
        },
        'BUG ZAPPERS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/insect-control/electric-insect-control'
        },
        'PICNIC BLANKETS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/picnicware/picnic-rugs'
        },
        'VACUUM FLASKS & JUGS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/picnicware/flasks-bottles'
        },
        'WATER JERRY CANS': {
            'img': '/8948798d7d914c8dae337e44cc3cd04e.png',
            'mobileimg' : '/0d347fb20a564b5d8045ced444ec34bd.png',
            'url': '/our-range/outdoor-living/picnicware/portable-water-storage'
        },
        'APARTMENT KITCHEN': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/apartment-kitchen_bbundle00291'
        },
        'CULINARY DELIGHT KITCHEN': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/culinary-delight-kitchen-_bbundle00371'
        },
        'THE CLASSIC KITCHEN': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/the-classic-kitchen_bbundle00451'
        },
        'URBAN COTTAGE KITCHEN': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/urban-cottage-kitchen_bbundle00721'
        },
        'KITCHEN CABINETS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/cabinets'
        },
        'KITCHEN DOORS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/doors'
        },
        'DRAWERS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/drawers'
        },
        'KICKBOARDS & PANELS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/kickboards-panels'
        },
        'ACCESSORIES': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/accessories'
        },
        'KITCHEN PACKAGES': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/kitchen-packages'
        },
        'LAMINATED BENCHTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/benchtops/laminated'
        },
        'TIMBER BENCHTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/benchtops/timber'
        },
        'STONE BENCHTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/benchtops/stone'
        },
        'SOLID SURFACE BENCHTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/benchtops/solid-surface'
        },
        'KITCHEN TAPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/kitchen-taps-sinks/taps'
        },
        'KITCHEN SINKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/kitchen-taps-sinks/sinks'
        },
        'WATER FILTRATION': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/kitchen-taps-sinks/water-filtration'
        },
        'WASTE DISPOSALS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/kitchen-taps-sinks/waste-disposals'
        },
        'ACRYLIC SPLASHBACKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/splashbacks/acrylic'
        },
        'GLASS SPLASHBACKS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/splashbacks/glass'
        },
        'SPLASHBACK EXTRUSIONS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/splashbacks/splashback-extrusions'
        },
        'BUILT IN OVENS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/appliances/built-in-ovens'
        },
        'UPRIGHT OVENS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/appliances/upright-ovens'
        },
        'COOKTOPS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/appliances/cooktops'
        },
        'RANGEHOODS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/appliances/rangehoods'
        },
        'VENTILATION': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/appliances/ventilation'
        },
        'DISHWASHERS': {
            'img': '/d7e8c896ba014505bcd6517edee9665f.png',
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/appliances/dishwashers'
        },
        'RETREAT BATHROOM': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/retreat-bathroom_bbundle0082'
        },
        'SHOWERS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/showers'
        },
        'BATHROOM TAPWARE': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/tapware'
        },
        'VANITIES & MIRRORS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/vanities-mirrors'
        },
        'TOILETS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/toilets'
        },
        'BASINS & VESSELS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/basins-vessels'
        },
        'BATHS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/baths-spas'
        },
        'INDEPENDENT LIVING AIDS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/independent-living-aids'
        },
        'BATHROOM ACCESSORIES': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/accessories'
        },
        'BATHROOM DÉCOR': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/bathroom/decor'
        },
        'HOT WATER UNITS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/hot-water-units'
        },
        'PIPE & FITTINGS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/pipe-fittings'
        },
        'PLUMBING TOOLS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/tools'
        },
        'TAP & TOILET SPARES': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/tap-toilet-spares'
        },
        'DRAINAGE': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/drainage'
        },
        'GUTTERING & SPOUTING': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/guttering-spouting'
        },
        'PUMPS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/pumps'
        },
        'WATER TANKS': {
            'img': '/3b5ceaecf7644e2fb00d00eda8fdac15.png',
            'mobileimg' : '/92f0e234940a4e0995274daf72cab9f7.png',
            'url': '/our-range/bathroom-plumbing/plumbing/water-tanks'
        },
        'INDOOR ROLLER BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/roller'
        },
        'INDOOR SHUTTER BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/shutter-blinds'
        },
        'ROMAN BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/roman'
        },
        'TIMBER VENETIAN BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/timber-venetian'
        },
        'PVC VENETIAN BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/pvc-venetian'
        },
        'ALUMINIUM VENETIAN BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/aluminium-venetian'
        },
        'VERTICAL BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/vertical'
        },
        'CELLULAR BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/cellular'
        },
        'INDOOR BLINDS ACCESSORIES': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/indoor-blinds-accessories'
        },
        'MATCHSTICK BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/matchstick'
        },
        'ROLL UP BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/roll-up'
        },
        'RETRACTABLE BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/retractable'
        },
        'OUTDOOR ROLLER BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/roller'
        },
        'AWNING BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/awning'
        },
        'OUTDOOR BAMBOO BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/bamboo'
        },
        'BISTRO BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/bistro'
        },
        'BISTRO BLIND ACCESSORIES': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/outdoor-blinds/bistro-blind-accessories'
        },
        'CURTAINS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/curtain-accessories/curtains'
        },
        'CURTAIN RAILS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/curtain-accessories/rails'
        },
        'CURTAIN TRACKS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/curtain-accessories/tracks'
        },
        'CURTAIN RODS, BRACKETS & HOOKS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/curtain-accessories/curtain-accessories'
        },
        'CUSTOM ROLLER BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-roller-blinds'
        },
        'CUSTOM ROMAN BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-roman-blinds'
        },
        'CUSTOM VENETIAN BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-venetian-blinds'
        },
        'CUSTOM VERTICAL BLINDS': {
            'img': '/254e6edc8cde469f9f1b2fdbf2098539.png',
            'mobileimg' : '/18a12f4cbc6b4b54bd4493a7e76273e5.png',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-vertical-blinds'
        },
        'SIT STAND DESKS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/desks-tables/sit-stand-desks'
        },
        'CORNER DESKS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/desks-tables/corner-desks'
        },
        'BOARD ROOM TABLES': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/desks-tables/board-room-tables'
        },
        'EXECUTIVE DESKS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/desks-tables/executive-desks'
        },
        'Leather Office Chairs': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-chairs/leather-office-chairs'
        },
        'BOOK CASES': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-storage/book-cases'
        },
        'OFFICE DRAWERS & MOBILE PEDESTALS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-storage/office-drawers-and-mobile-pedestals'
        },
        'STATIONERY CUPBOARDS & TAMBOURS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-storage/stationery-cupboards-and-tambours'
        },
        'ANTI FATIGUE & CHAIR MATS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-accessories/anti-fatigue-and-chair-mats'
        },
        'ARTIFICIAL OFFICE PLANTS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-accessories/office-plants'
        },
        'OFFICE BINS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-accessories/office-bins'
        },
        'SOFT FURNISHINGS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-accessories/soft-furnishings'
        },
        'DESK LAMPS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-power-and-lighting/desk-lamps'
        },
        'POWER BOARDS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-power-and-lighting/power-boards'
        },
        'EXTENSION CORDS': {
            'img': '/11648aad462f41e2bc8ecb815d6cd251.png',
            'mobileimg' : '/cb73b41b113e4995a21938dc23385e16.png',
            'url': '/our-range/office-furniture/office-power-and-lighting/extension-cords'
        },
        'INTERIOR': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint/interior'
        },
        'EXTERIOR': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint/exterior'
        },
        'WOOD FINISHES': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint/wood-finishes'
        },
        'OTHER PAINTS': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint/other-paints'
        },
        'PAINT APPLICATORS': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint-accessories/paint-applicators-trays-buckets'
        },
        'POWER PAINTING': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint-accessories/power-painting'
        },
        'PAINT PREPARATION': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint-accessories/preparation'
        },
        'PAINT PROTECTION': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint-accessories/protection'
        },
        'TAPE': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint-accessories/tape'
        },
        'CRAFT': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/paint-accessories/craft'
        },
        'TILES': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/tiles'
        },
        'TIMBER FLOORS': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/timber-floors'
        },
        'VINYL FLOORING': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/vinyl'
        },
        'CARPET': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/carpet'
        },
        'FLOORING ACCESSORIES': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/accessories-adhesives'
        },
        'RUGS': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/rugs'
        },
        'MATS': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/flooring/mats'
        },
        'TEXTURED WALLPAPER': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/wallpaper/textured-wallpaper'
        },
        'WALLPAPER ACCESSORIES': {
            'img': '/2868ccab7bac4a6d82ae59f35f8b93c1.png',
            'mobileimg' : '/a59eb75ad809402c9c03455c98558e5d.png',
            'url': '/our-range/paint-decorating/wallpaper/wallpaper-accessories'
        },
        'BRUSHWARE & MOPS': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/brushware-mops'
        },
        'BUCKETS, BASINS & PAILS': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/buckets-basins-pails'
        },
        'BINS': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/bins'
        },
        'VACUUMS, STEAM CLEANERS & MOPS': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/vacuum-steam-cleaners'
        },
        'CLEANING CHEMICALS': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/chemicals'
        },
        'CLEANING ACCESSORIES': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/accessories'
        },
        'COMMERCIAL CLEANING': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/cleaning/commercial-cleaning'
        },
        'MODULAR': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/laundry/modular'
        },
        'LAUNDRY EQUIPMENT': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/laundry/equipment'
        },
        'CLOTHESLINES': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/laundry/clotheslines'
        },
        'WARDROBE STORAGE': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/storage/wardrobe'
        },
        'GARAGE STORAGE': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/storage/garage'
        },
        'STORAGE BOXES, CONTAINERS & FLEXI TUBS': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/storage/containers'
        },
        'DECORATIVE STORAGE': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/storage/storage-boxes-and-baskets'
        },
        'SHELVING': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/storage/shelving'
        },
        'PACKING MATERIALS & SUPPLIES': {
            'img': '/3927e631136b459291019670d48ef7e1.png',
            'mobileimg' : '/08778dfc9fce46f2a4c6352be8bfe4c2.png',
            'url': '/our-range/storage-cleaning/storage/moving-packing'
        },
        'BATTERIES': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/batteries'
        },
        'EXHAUST FANS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/exhaust-fans'
        },
        'EXTENSION LEADS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/extension-leads'
        },
        'POWERBOARDS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/powerboards'
        },
        'ADAPTORS & TIMERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/adaptors-timers'
        },
        'ELECTRICAL TRADE TOOLS & TESTERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/electrical-trade-tools-testers'
        },
        'POWERPOINTS, LIGHT SWITCHES & ACCESSORIES': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/powerpoints-light-switches-accessories'
        },
        'CABLE & CONDUIT': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/cable-conduit'
        },
        'LANTERNS, SPOTLIGHTS & TORCHES': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/lanterns-spotlights-torches'
        },
        'SOLAR POWER PRODUCTS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/electrical/solar-power'
        },
        'INTERIOR LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/interior'
        },
        'LAMPS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/lamps'
        },
        'OUTDOOR LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/outdoor'
        },
        'FESTIVE LIGHTS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/festive'
        },
        'PARTY LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/party'
        },
        'WORK & SAFETY LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/work-safety'
        },
        'SOLAR LIGHTING': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/solar'
        },
        'GLOBES & TUBES': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/lighting/globes-tubes'
        },
        'HOUSEHOLD HEATERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/heaters/household'
        },
        'INDUSTRIAL HEATERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/heaters/industrial'
        },
        'FANS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/cooling/fans'
        },
        'AIR CONDITIONERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/cooling/air-conditioners'
        },
        'CEILING FANS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/cooling/ceiling-fans'
        },
        'COOLING ACCESSORIES': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/cooling/cooling%20accessories'
        },
        'DEHUMIDIFIERS': {
            'img': '/9cf3088c320f41d1a991e2b721456987.png',
            'mobileimg' : '/93f5f73e5ab34a3abd5ced003ad923ea.png',
            'url': '/our-range/lighting-electrical/cooling/dehumidifiers'
        },
        'AMAZON ECHO PRODUCTS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-assistants/amazon-products'
        },
        'GOOGLE HOME & HUB PRODUCTS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-assistants/google-home-hub-products'
        },
        'SMART DOOR LOCKS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-security/smart-door-locks'
        },
        'SMART DOORBELLS & VIDEO INTERCOM SYSTEMS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-security/smart-doorbells-video-intercom-systems'
        },
        'SMART SECURITY SYSTEMS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-security/smart-security-systems'
        },
        'SMART SECURITY CAMERAS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-security/smart-security-cameras'
        },
        'SMART PADLOCKS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-home-security/smart-padlocks'
        },
        'SMART LIGHTS & SMART LIGHT BULBS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-lighting-power/smart-light-bulbs'
        },
        'SMART GARDEN LIGHTS & SMART GARDEN TOOLS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-lighting-power/smart-garden-lights-tools'
        },
        'SMART LIGHT SWITCHES & SMART SENSORS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-lighting-power/smart-light-switches-sensors'
        },
        'SMART PLUGS & SMART HOME ACCESSORIES': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/smart-lighting-power/smart-plugs-home-accessories'
        },
        'MESH ROUTERS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/routers-modems/mesh-routers'
        },
        'RANGE EXTENDERS & POWERLINE ADAPTERS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/routers-modems/range-extenders-powerline'
        },
        'ROUTER MODEMS': {
            'img': '/1796414c2be94a94b7e6ca2421a55285.png.png',
            'mobileimg' : '/50f7387b90314d6cb12f04a28bd8db88.png',
            'url': '/our-range/smart-home/routers-modems/routers-modems'
        },
        'CARPET CLEANERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/carpet-cleaning-equipment/carpet-cleaners'
        },
        'CARPET BLOWERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/carpet-cleaning-equipment/carpet-blowers'
        },
        'CARPET CLEANING CONSUMABLES': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/carpet-cleaning-equipment/carpet-cleaning-consumables'
        },
        'FLOOR SANDERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/floor-sanding-equipment/floor-sanders'
        },
        'FLOOR SANDING CONSUMABLES': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/floor-sanding-equipment/floor-sanding-consumables'
        },
        'BRICK SAWS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/brick-saws'
        },
        'CIRCULAR SAWS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/circular-saws'
        },
        'COMPACTORS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/compactors'
        },
        'SKIP HIRE': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/skip-hire'
        },
        'DIGGERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/diggers'
        },
        'HAND TROLLEYS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/hand-trolleys'
        },
        'LAWN ROLLERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/lawn-rollers'
        },
        'NAIL GUNS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/nail-guns'
        },
        'PANEL LIFTS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/panel-lifts'
        },
        'TILE CUTTERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/general-hire-equipment/tile-cutters'
        },
        'TRAILERS': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/trailer-and-vehicle-hire/trailers'
        },
        'VEHICLES': {
            'img': '/62bce3bb94a04df0b67e91135eb7e248.png',
            'mobileimg' : '/9d7c1d657f24401ab78a21c8308f8012.png',
            'url': '/our-range/hire-shop/trailer-and-vehicle-hire/vehicles'
        }
    };

    function observeNav() {
        var targetNode = document.querySelector('nav.header-navigation--lg');
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        var callback = function() {
            if (document.querySelector('nav.header-navigation--lg').classList.contains('is-open')) {
                  var categoryHistory = getCategoryHistory();
                  if (categoryHistory === null) {
                  		return;
                  }
                  var html = createDesign(categoryHistory);
                  appendHtml(html, 'desktop');
            }
        };
        
        var observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    }

    function getCategoryHistory() {
        var categoryHistory = JSON.parse(window.localStorage.getItem('optimizely.tertiarycategoryhistory'));
        return categoryHistory;
    }

    function createDesign(categoryHistory) {

        var div = document.createElement('div');
        div.className = 'product_history_wrapper';
        div.id = 'product_history_wrapper';

        var divInner = document.createElement('div');
        divInner.className = 'product_history_banner';
        div.appendChild(divInner);
      
        var continueText = document.createElement('p');
        continueText.className = 'main_title';
        continueText.innerText = "Continue shopping:";
        divInner.appendChild(continueText);

        var divImages = document.createElement('div');
        divImages.className = 'img-section';
        divInner.appendChild(divImages);

        categoryHistory.slice(0, 4).forEach(function(categoryName) {

            var categoryDetails = categories[categoryName.tertiarycategory];

            var product = document.createElement('div');
            product.className = 'product-img';
            
            var masterUrl = 'https://www.bunnings.com.au';
            var link = document.createElement('a');
            link.href = masterUrl + categoryDetails.url;

            var masterImgUrl = '//cdn.optimizely.com/img/15721220395';
            var img = document.createElement('img');
            img.src = masterImgUrl + categoryDetails.mobileimg;
            img.alt = categoryName.tertiarycategory.toLowerCase();
            link.appendChild(img);
            
            var paragraph = document.createElement('p');
            paragraph.className = 'product-desc';
            paragraph.innerHTML = '<span>' + categoryName.tertiarycategory.charAt(0).toUpperCase() + categoryName.tertiarycategory.substr(1).toLowerCase() + '</span>';
            link.appendChild(paragraph);
            
            product.appendChild(link);
            divImages.appendChild(product);
        });

        return div;
    }

    function appendHtml(html, device) {
        if (device == 'mobile') {
            var mobileDiv = document.querySelector('#headerMainMenu');
            mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
        } else {
            var desktopDiv = document.querySelector('#RefreshHeader .header-navigation-level--lg_content-title');
            desktopDiv.parentNode.insertBefore(html, desktopDiv.nextSibling);
        } 
    }

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
    }

    if (isMobile()) {
        utils
            .waitForElement('#RefreshCarousel')
            .then(function(){
                var categoryHistory = getCategoryHistory();
                if (categoryHistory === null) {
                		return;
                }
                var html = createDesign(categoryHistory);
                appendHtml(html, 'mobile');
            });
    } else {
        utils
            .waitForElement('nav.header-navigation--lg')
            .then(function(){
                observeNav();
            });
    }
  
  })(window, window.optimizely.get('utils'));
  
  
  
  
  
  
  
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  
  
  
  
  
  
  
  
  
  
 #RefreshHeader .header-navigation-level--lg_content-title {
    margin-bottom: 0;
}

.product_history_wrapper {
    width: 100%;
    min-height: 150px;
    background-color: #f5f5f5;
}

.product_history_banner {
    margin: 0 auto;
    position: relative;
    min-height: 150px;
}

.product_history_banner .main_title {
    font-size: 14px;
    font-family: futura-w01-heavy, Helvetica, Arial, sans-serif;
    color: #3a3a3a;
    padding-left: 5px;
    margin-bottom: 5px;
}

.product_history_banner .img-section:before {
    content: " ";
    display: table;
}

.product_history_banner .img-section:after {
    content: " ";
    display: table;
    clear: both;
}

.product_history_banner .product-img {
    width: 25%;
    position: relative;
    min-height: 1px;
    padding-left: 5px;
    padding-right: 5px;
    float: left;
}

.product_history_banner .product-img a {
    display: block;
    color: #ffffff;
    text-decoration: none;
}

.product_history_banner .product-img img {
    height: auto;
    width: 100%;
}

.product_history_banner .product-img .product-desc {
    min-height: 35px;
    background-color: #0b5257;
    position: absolute;
    bottom:0;
    left:5px;
    right:5px;
    font-family: futura-w01-medium, Helvetica, Arial, sans-serif;
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
    padding:4px;
}

@media (min-width: 560px) {

    #RefreshHeader .product_history_wrapper {
        padding: 0 15px;
        min-height: 150px;
        background-color: inherit;
    }
    
    #RefreshHeader .product_history_banner {
        margin: 0 auto;
        position: relative;
        min-height: 150px;
        border-bottom: 1px solid #333;
    }
    
    #RefreshHeader .product_history_banner .main_title {
        font-size: 14px;
        font-family: 'Futura W01 Heavy',sans-serif;
        font-weight: bold;
        color: #ffffff;
        padding-left: 4px;
        margin-bottom: 5px;
    }
    
    .product_history_banner .img-section:before {
        content: " ";
        display: table;
    }
    
    .product_history_banner .img-section:after {
        content: " ";
        display: table;
        clear: both;
    }
    
    #RefreshHeader .product_history_banner .product-img {
        width: 25%;
        position: relative;
        min-height: 1px;
        padding-left: 4px;
        padding-right: 4px;
        float: left;
    }
    
    #RefreshHeader .product_history_banner .product-img a {
        display: block;
        color: #ffffff;
        text-decoration: none;
    }
    
    #RefreshHeader .product_history_banner .product-img img {
        height: auto;
        width: 100%;
        border-radius: 2px;
    }
    
    #RefreshHeader .product_history_banner .product-img p.product-desc {
        min-height: 35px;
        padding:4px;
        background-color: inherit;
        position: static;
        font-family: futura-w01-medium, Helvetica, Arial, sans-serif;
        font-size: 12px;
        text-align: center;
        line-height: 1.2;
    }
}