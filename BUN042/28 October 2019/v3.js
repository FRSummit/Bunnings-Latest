(function(window, utils) {
    var categories = {
        'DRILLS': {
            'mobileimg' : '/3928154c4ade4dcfa5ea780be9707b90.jpg',
            'url': '/our-range/tools/power-tools/drills'
        },
        'POWER SAWS': {
            'mobileimg' : '/7fa5e1371a0d4d6cb8b5c4cc56cd31b9.jpg',
            'url': '/our-range/tools/power-tools/power-saws'
        },
        'BATTERIES & CHARGERS': {
            'mobileimg' : '/86ed32d9905c411794b76a308aea79ce.jpg',
            'url': '/our-range/tools/power-tools/batteries-chargers'
        },
        'WORKLIGHTS': {
            'mobileimg' : '/52fc019f680e4299b4e1403d19e7f6c1.jpg',
            'url': '/our-range/tools/power-tools/worklights'
        },
        'WORKSITE RADIOS': {
            'mobileimg' : '/f91c320e71824ced8f3ded498b9c63ca.png',
            'url': '/our-range/tools/power-tools/worksite-radios'
        },
        'CORDLESS FANS & BLOWERS': {
            'mobileimg' : '/b72e0b062fde4be1afdd6a66adfda0af.png',
            'url': '/our-range/tools/power-tools/fans-blowers'
        },
        'PRESSURE WASHERS': {
            'mobileimg' : '/50e357c701974247a6014b915fcc1ced.jpg',
            'url': '/our-range/tools/power-tools/pressure-washers'
        },
        'SANDERS': {
            'mobileimg' : '/a0c4ccfa49c346c994b5f6a37a94e664.jpg',
            'url': '/our-range/tools/power-tools/sanders'
        },
        'AIR COMPRESSORS': {
            'mobileimg' : '/247f6588c2354a52a090b7861f0258c8.jpg',
            'url': '/our-range/tools/power-tools/air-compressors'
        },
        'PORTABLE GENERATORS': {
            'mobileimg' : '/e45aa20b8d2542fc99bdc4d774a4697e.jpg',
            'url': '/our-range/tools/power-tools/portable-generators'
        },
        'MEASURING TOOLS': {
            'mobileimg' : '/da4da34f214c447c979771e8820225cd.jpg',
            'url': '/our-range/tools/hand-tools/measuring-tools'
        },
        'SAWS, KNIVES & CUTTING TOOLS': {
            'mobileimg' : '/35d1b1ee9ff643f9add86856063ff9f1.jpg',
            'url': '/our-range/tools/hand-tools/saws-knives-cutting-tools'
        },
        'SOCKETS, SPANNERS & WRENCHES': {
            'mobileimg' : '/02b790dce5d14dc5bd94d10547ec0373.jpg',
            'url': '/our-range/tools/hand-tools/sockets-spanners-wrenches'
        },
        'CLAMPS, PLIERS & VICES': {
            'mobileimg' : '/3ed862585e7b4165aefd1bc82f4c7e8f.jpg',
            'url': '/our-range/tools/hand-tools/clamps-pliers-vices'
        },
        'HAMMERS & WRECKERS': {
            'mobileimg' : '/459cadd5e97f4d9384668c1f3cd1ce45.jpg',
            'url': '/our-range/tools/hand-tools/hammers-wreckers'
        },
        'SCREWDRIVERS & HEX KEYS': {
            'mobileimg' : '/14688abb7eaf43cfb7b91c278f1af5d1.jpg',
            'url': '/our-range/tools/hand-tools/screwdrivers-hex-keys'
        },
        'CHISELS, FILES & SHARPENING': {
            'mobileimg' : '/6becdf1a7a4240fb94e633b9ae27d9c0.png',
            'url': '/our-range/tools/hand-tools/chisels-files-sharpening'
        },
        'MASONRY & PLASTER TOOLS': {
            'mobileimg' : '/358c219e94da44b49f622e11e0efa2ae.jpg',
            'url': '/our-range/tools/hand-tools/masonry-plaster-tools'
        },
        'STAPLES & RIVET GUNS': {
            'mobileimg' : '/742611df935c42dbb758ab4dd2ecfdec.jpg',
            'url': '/our-range/tools/hand-tools/staples-rivet-guns'
        },
        'DRILL BITS': {
            'mobileimg' : '/5dc223cdfe3046c68c51474f7d2fa94c.jpg',
            'url': '/our-range/tools/tool-accessories/drill-bits'
        },
        'DRILLING ACCESSORIES': {
            'mobileimg' : '/32aaf5e30a87419cbc8d235d3eb08761.jpg',
            'url': '/our-range/tools/tool-accessories/drilling-accessories'
        },
        'POWER SAW BLADE & ACCESSORIES': {
            'mobileimg' : '/42ad49f0179d4469a8acdd3dd5a3054b.jpg',
            'url': '/our-range/tools/tool-accessories/power-saw-blade-accessories'
        },
        'SANDPAPER, DISCS & PADS': {
            'mobileimg' : '/d562f23452e64a82a952512a9ca1420e.png',
            'url': '/our-range/tools/tool-accessories/sandpaper-discs-pads'
        },
        'GRINDER ACCESSORIES': {
            'mobileimg' : '/6281379f4a6e485fab3e03d14889eb52.jpg',
            'url': '/our-range/tools/tool-accessories/grinder-accessories'
        },
        'WELDING & SOLDERING ACCESSORIES': {
            'mobileimg' : '/88bf01a2cabf4a4f9bb78753f9895468.jpg',
            'url': '/our-range/tools/tool-accessories/welding-soldering-accessories'
        },
        'AIR TOOL PARTS & ACCESSORIES': {
            'mobileimg' : '/91e239b079da4f2296676108cea4001b.jpg',
            'url': '/our-range/tools/tool-accessories/air-tool-parts-accessories'
        },
        'MULTI TOOL ACCESSORIES': {
            'mobileimg' : '/1a89334c34234e4a9a385f6efdafe64d.png',
            'url': '/our-range/tools/tool-accessories/multi-tool-accessories'
        },
        'ROUTER BITS & ACCESSORIES': {
            'mobileimg' : '/10b3d404512944c0be2598f6ca3252bc.jpg',
            'url': '/our-range/tools/tool-accessories/router-bits'
        },
        'ROTARY TOOL ACCESSORIES': {
            'mobileimg' : '/e4fc7ead2cf14a02af6d9d3694961fcb.jpg',
            'url': '/our-range/tools/tool-accessories/rotary-tool'
        },
        'MIG WELDERS': {
            'mobileimg' : '/12ac4107a6884db5bab89704f18ef845.jpg',
            'url': '/our-range/tools/welding-soldering/mig-welders',
        },
        'ARC WELDERS': {
            'mobileimg' : '/bde47d895e4b45c2b2097e8ea721f831.jpg',
            'url': '/our-range/tools/welding-soldering/arc-welders'
        },
        'SOLDERING IRONS': {
            'mobileimg' : '/9e73534625a9432cb30ae872c3107eb3.jpg',
            'url': '/our-range/tools/welding-soldering/soldering'
        },
        'PLASMA CUTTERS': {
            'mobileimg' : '/953572bb601b4889831d338948503cd3.jpg',
            'url': '/our-range/tools/welding-soldering/plasma-cutters'
        },
        'INVERTER WELDERS': {
            'mobileimg' : '/ef0297e7f4ba45ed9ce9bd73ec00eb49.jpg',
            'url': '/our-range/tools/welding-soldering/inverter-welders'
        },
        'SAFETY ACCESSORIES': {
            'mobileimg' : '/bca946d0510a4035ab23570fad2988a4.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/accessories'
        },
        'EAR PROTECTION': {
            'mobileimg' : '/e198a2deaafe4be8998754b474dc81d6.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/ear-protection'
        },
        'FACE & HEAD PROTECTION': {
            'mobileimg' : '/1249449e62d0467aa7a064ce9b6cd136.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/face-head-protection'
        },
        'FIRST AID KITS': {
            'mobileimg' : '/d56db8d0810b442ab50b7bc56113a926.png',
            'url': '/our-range/tools/safety-equipment-workwear/first-aid-kits'
        },
        'WORK & SAFETY GLOVES': {
            'mobileimg' : '/3fa57227b79d48de9a8a8385110720a9.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/gloves'
        },
        'KNEE PADS': {
            'mobileimg' : '/1b1cd70eaf7546a69db9fb8c184008ae.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/knee-pads'
        },
        'RESPIRATORS & DUST MASKS': {
            'mobileimg' : '/9ae60cb7cb9743ff958650e65fb80174.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/respirators-dust-masks'
        },
        'SAFETY GLASSES': {
            'mobileimg' : '/7047d552d7dc47209e6e4b0129463f98.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/safety-glasses'
        },
        'SAFETY WORKWEAR': {
            'mobileimg' : '/8f044a7a18e54b6db8decf9b5df3d580.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/safety-workwear'
        },
        'HI VIS & SAFETY VESTS': {
            'mobileimg' : '/baf500685dba41649e10b0ed699b0cb1.jpg',
            'url': '/our-range/tools/safety-equipment-workwear/vests'
        },
        'CAR ACCESSORIES': {
            'mobileimg' : '/162ace33b4c441afa950b1200c6f42c8.jpg',
            'url': '/our-range/tools/automotive/car-accessories'
        },
        'CAR BATTERIES & ELECTRICAL': {
            'mobileimg' : '/ee0fa1b09292465d95fed6a7596b77d8.jpg',
            'url': '/our-range/tools/automotive/car-batteries-electrical'
        },
        'LUBRICANTS': {
            'mobileimg' : '/c5c6a6ce4e544fb2a9bad85a61904868.png',
            'url': '/our-range/tools/automotive/lubricants'
        },
        'CAR TRAILERS': {
            'mobileimg' : '/d5e2d13d9e3e42048f84fd9412f37c5b.jpg',
            'url': '/our-range/tools/automotive/trailers'
        },
        'TRAILER ACCESSORIES': {
            'mobileimg' : '/7abad50f3de0410d8ffcebd0eb3e6a3f.jpg',
            'url': '/our-range/tools/automotive/trailer-accessories'
        },
        'TOOL CHESTS & TROLLEYS': {
            'mobileimg' : '/bce67626e6a54dd0ab5c5509ddd326de.png',
            'url': '/our-range/tools/storage/tool-trolley-chests'
        },
        'PLASTIC TOOL BOXES': {
            'mobileimg' : '/37a209ee91d74fe7b7021f26575440c4.jpg',
            'url': '/our-range/tools/storage/plastic-tool-boxes'
        },
        'TOOL KITS': {
            'mobileimg' : '/98955b6fc43648d599bee0f25d04db54.jpg',
            'url': '/our-range/tools/storage/tool-kits'
        },
        'CARGO & SITE BOXES': {
            'mobileimg' : '/84e8f33815b649a2a68b2e8efd5fe9f7.jpg',
            'url': '/our-range/tools/storage/cargo-site-boxes'
        },
        'METAL TOOL BOXES': {
            'mobileimg' : '/97f1bcbb3c2844b397ba57aa7766034b.jpg',
            'url': '/our-range/tools/storage/metal-tool-boxes'
        },
        'TOOL BAG & BELTS': {
            'mobileimg' : '/3c926f43453049768dd7f693d14bf9f7.jpg',
            'url': '/our-range/tools/storage/bag-belts'
        },
        'WORK BENCHES & SAW HORSES': {
            'mobileimg' : '/f882206b0ebd446b976ae85d7f4fc763.jpg',
            'url': '/our-range/tools/storage/work-benches-saw-horses'
        },
        'FLARING TOOLS': {
            'mobileimg' : '/1baea04231594c6193516e2bbda6df33.jpg',
            'url': '/our-range/tools/plumbing/flaring-tools'
        },
        'PIPE & STRAP WRENCHES': {
            'mobileimg' : '/081028e669814856a7936199a151fe75.jpg',
            'url': '/our-range/tools/plumbing/pipe-strap-wrenches'
        },
        'PIPE & TUBE BENDERS': {
            'mobileimg' : '/d467539dc98743dd8dd61ad8b040d57c.jpg',
            'url': '/our-range/tools/plumbing/pipe-tube-benders'
        },
        'PIPE & TUBE CUTTING': {
            'mobileimg' : '/86237139b0d04c6cac437944694428b6.jpg',
            'url': '/our-range/tools/plumbing/pipe-tube-cutting'
        },
        'TAP SPANNERS': {
            'mobileimg' : '/d7e2d4025db64c2f9f5fc2d5025ea4fe.jpg',
            'url': '/our-range/tools/plumbing/tap-spanners'
        },
        'TAP RESEATING TOOLS': {
            'mobileimg' : '/4fdccbbe328e4a449789713c1fbf4b89.jpg',
            'url': '/our-range/tools/plumbing/tap-reseating-tools'
        },
        'BOW SHACKLES': {
            'mobileimg' : '/97e91a284cd34aae9c57a19022d1674a.png',
            'url': '/our-range/tools/heavy-lifting-equipment/bow-shackles'
        },
        'ELECTRIC HOISTS': {
            'mobileimg' : '/7302cf8fbbee44eeb61ba6521317eace.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/electric-hoists'
        },
        'LIFTING BAGS': {
            'mobileimg' : '/f7341e78c7134641bddc91a7bffc7000.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/lifting-bags'
        },
        'LIFTING CHAINS & CHAIN BLOCKS': {
            'mobileimg' : '/2bb1cd43db67402d99384a267148bc17.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/lifting-chains-chain-blocks'
        },
        'LIFTING SLINGS': {
            'mobileimg' : '/ee4e278bbe3e4f3ca155740e9650ebb6.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/lifting-slings'
        },
        'LOAD BINDERS': {
            'mobileimg' : '/51668b3a240443c5a276225b9e859cfc.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/load-binders'
        },
        'PLATFORM SCALES': {
            'mobileimg' : '/b8be35eb0f494631b9d99325149a5aca.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/platform-scales'
        },
        'WINCHES': {
            'mobileimg' : '/f00a1d767b0a4691b1644d21ac363357.jpg',
            'url': '/our-range/tools/heavy-lifting-equipment/winches'
        },
        'DOORS': {
            'mobileimg' : '/f3ee959f814148afb4e7601e3166f129.jpg',
            'url': '/our-range/building-hardware/building-construction/doors'
        },
        'GARAGES': {
            'mobileimg' : '/157138c4c8cd4a8fa7ac5e7648197e1a.jpg',
            'url': '/our-range/building-hardware/building-construction/garages'
        },
        'LADDERS': {
            'mobileimg' : '/53763c9f71d1463f84efec9503c9dcb8.jpg',
            'url': '/our-range/building-hardware/building-construction/ladders'
        },
        'WINDOWS': {
            'mobileimg' : '/a7129c3dda3a45699bf0a73800c02ffc.jpg',
            'url': '/our-range/building-hardware/building-construction/windows'
        },
        'VENTILATION': {
            'mobileimg' : '/d5ad1b55a2c64429af0dab00011d42fb.jpg',
            'url': '/our-range/building-hardware/building-construction/ventilation'
        },
        'INSULATION': {
            'mobileimg' : '/346ff8b8c22243e298403f80af6b636f.jpg',
            'url': '/our-range/building-hardware/building-construction/insulation'
        },
        'BRICKS & BLOCKS': {
            'mobileimg' : '/92574d729ccf466c934d3aee1ccc8aa0.jpg',
            'url': '/our-range/building-hardware/building-construction/bricks-blocks'
        },
        'SITE MANAGEMENT & SAFETY': {
            'mobileimg' : '/bb4f5a2296e8426596ab84e959eda954.jpg',
            'url': '/our-range/building-hardware/building-construction/site-management-safety'
        },
        'WATERPROOFING & SEALING': {
            'mobileimg' : '/0aee589b0c614c4b86e72e84956c7f97.jpg',
            'url': '/our-range/building-hardware/building-construction/waterproofing-sealing'
        },
        'BUILDERS PLASTIC': {
            'mobileimg' : '/2c53c104bb3249ab8e30216de84f5baa.jpg',
            'url': '/our-range/building-hardware/building-construction/builders-plastic'
        },
        'HARDWOOD DECKING': {
            'mobileimg' : '/1d945d05766e401aa4fbea0ce83ec5c4.jpg',
            'url': '/our-range/building-hardware/decking/hardwood-decking'
        },
        'COMPOSITE DECKING': {
            'mobileimg' : '/3b85a348045543cf8c89eeda2bb20438.jpg',
            'url': '/our-range/building-hardware/decking/composite-decking'
        },
        'TREATED PINE DECKING': {
            'mobileimg' : '/f5f22e941e2b4a6e8e20a42181408458.png',
            'url': '/our-range/building-hardware/decking/treated-pine-decking'
        },
        'MODULAR DECKING': {
            'mobileimg' : '/2bb4f68fec6b4b79a2c4e428696b7f15.jpg',
            'url': '/our-range/building-hardware/decking/modular-decking'
        },
        'STAIR SETS': {
            'mobileimg' : '/23d84dd382744240b770c5a44e9e10d0.jpg',
            'url': '/our-range/building-hardware/decking/stair-sets'
        },
        'HANDRAIL': {
            'mobileimg' : '/296aaab9ac5e45dabb3585dd81785643.jpg',
            'url': '/our-range/building-hardware/decking/handrail'
        },
        'SLEEPERS': {
            'mobileimg' : '/aee14696c016454fae310baa75acdab0.jpg',
            'url': '/our-range/building-hardware/landscape/sleepers'
        },
        'TREATED PINE POLES': {
            'mobileimg' : '/0b3680af4e2043f58987b9c714ec5778.png',
            'url': '/our-range/building-hardware/landscape/treated-pine-poles'
        },
        'STRUCTURAL TREATED PINE': {
            'mobileimg' : '/829ab2524a5f4a12a2b36cb702841f30.jpg',
            'url': '/our-range/building-hardware/landscape/structural-treated-pine'
        },
        'PRIMED TREATED STRUCTURAL TIMBER': {
            'mobileimg' : '/948d4de4c3314c4da2c65ced434f12ad.jpg',
            'url': '/our-range/building-hardware/landscape/primed-treated-structural-timber'
        },
        'GARDEN EDGING': {
            'mobileimg' : '/90a9ea0bd2a5463695aa541ad7e3f4bd.jpg',
            'url': '/our-range/building-hardware/landscape/garden-edging'
        },
        'POSTS': {
            'mobileimg' : '/e88bc66080c946c9a5996a1ad0d9b363.png',
            'url': '/our-range/building-hardware/landscape/posts'
        },
        'STAIR SETS': {
            'mobileimg' : '/88d2cc5841084d72869e21f4e5b36fa4.png',
            'url': '/our-range/building-hardware/landscape/stair-sets'
        },
        'SCREENING': {
            'mobileimg' : '/9dcb78da9414491bbd8cf142fc54d2b5.jpg',
            'url': '/our-range/building-hardware/fencing/screening'
        },
        'PICKETS': {
            'mobileimg' : '/ac059506cad348df9fe610a39afc3c08.png',
            'url': '/our-range/building-hardware/fencing/pickets'
        },
        'BRUSH FENCING': {
            'mobileimg' : '/fb9642c228ec4e7da0052c9ec1bc4a52.jpg',
            'url': '/our-range/building-hardware/fencing/brush'
        },
        'GATES': {
            'mobileimg' : '/c6a249af37a5479b864091499ac9bc14.jpg',
            'url': '/our-range/building-hardware/fencing/gates'
        },
        'FENCE POSTS': {
            'mobileimg' : '/ad49e29b767d4792bd5ccd58c66a36c1.png',
            'url': '/our-range/building-hardware/fencing/fence-posts'
        },
        'FENCE PALINGS': {
            'mobileimg' : '/bd313359c693438b836ee6e031480df6.jpg',
            'url': '/our-range/building-hardware/fencing/palings'
        },
        'FENCE CAPPING & LATTICE SURROUND': {
            'mobileimg' : '/6da99d151e3641ad86b7100d829e2e49.jpg',
            'url': '/our-range/building-hardware/fencing/fence-capping-lattice-surround'
        },
        'ALUMINIUM FENCING & GATES': {
            'mobileimg' : '/1fd1366b9aa04b17835764643103f852.jpg',
            'url': '/our-range/building-hardware/fencing/aluminium'
        },
        'GLASS FENCING & GATES': {
            'mobileimg' : '/d8bbbf493b864746b81660ce51c6d760.jpg',
            'url': '/our-range/building-hardware/fencing/glass'
        },
        'STEEL FENCING': {
            'mobileimg' : '/148ef8af77714e9093e75f42b2faf818.jpg',
            'url': '/our-range/building-hardware/fencing/steel'
        },
        'POSTS': {
            'mobileimg' : '/4b40732256a140a3b3c03a75f6e64fbd.jpg',
            'url': '/our-range/building-hardware/timber/posts'
        },
        'STRUCTURAL TIMBER': {
            'mobileimg' : '/f21c954d66d644908aa96cc0c5e5ad69.jpg',
            'url': '/our-range/building-hardware/timber/structural'
        },
        'STRUCTURAL FLOORING': {
            'mobileimg' : '/5095c7edc6654cf8840be2afd0d99682.png',
            'url': '/our-range/building-hardware/timber/structural-flooring'
        },
        'MOULDINGS': {
            'mobileimg' : '/7948e25fd8d0488abf44c8d05821058b.jpg',
            'url': '/our-range/building-hardware/timber/mouldings'
        },
        'DRESSED TIMBER': {
            'mobileimg' : '/db5e88bb42b94affaad5292493837993.jpg',
            'url': '/our-range/building-hardware/timber/dressed-timber'
        },
        'LINING BOARDS': {
            'mobileimg' : '/85efe29e2f244561b3aed03ab727f0ce.png',
            'url': '/our-range/building-hardware/timber/lining-boards'
        },
        'HERITAGE': {
            'mobileimg' : '/709f40d553bb46c5be20a138d3a850a5.jpg',
            'url': '/our-range/building-hardware/timber/heritage'
        },
        'STRUCTURAL PLYWOOD': {
            'mobileimg' : '/ad62655ce3144ab480dfd48ea1df8a43.png',
            'url': '/our-range/building-hardware/building-boards/structural-plywood'
        },
        'NON STRUCTURAL PLYWOOD': {
            'mobileimg' : '/b81f74cba9514a6ba3f5731319b51585.jpg',
            'url': '/our-range/building-hardware/building-boards/non-structural-plywood'
        },
        'MERCH PINE (NON STRUCTURAL)': {
            'mobileimg' : '/d04498064aa14cf9af72e5de21b9c6d5.jpg',
            'url': '/our-range/building-hardware/building-boards/merch-pine-non-structural'
        },
        'CLADDING': {
            'mobileimg' : '/ecabb6a5f4f14aa6abd3ec501578e483.jpg',
            'url': '/our-range/building-hardware/building-boards/cladding'
        },
        'PARTICLE BOARD': {
            'mobileimg' : '/b805dccf370c46b0baa457a069cdf960.png',
            'url': '/our-range/building-hardware/building-boards/particleboard'
        },
        'MDF': {
            'mobileimg' : '/0a8042daa6f14b50aa6430a80a48e9d5.jpg',
            'url': '/our-range/building-hardware/building-boards/mdf'
        },
        'MELAMINE & VENEER': {
            'mobileimg' : '/3d1a37e177cd47a584795f240beca1cc.jpg',
            'url': '/our-range/building-hardware/building-boards/melamine'
        },
        'BRACE BOARDS': {
            'mobileimg' : '/f0e9683174e145faa7f997c279c6aec3.png',
            'url': '/our-range/building-hardware/building-boards/brace-boards'
        },
        'MASONITE': {
            'mobileimg' : '/91b471840f9d42bd949b65eb4f3e1f05.jpg',
            'url': '/our-range/building-hardware/building-boards/masonite'
        },
        'PEGBOARD': {
            'mobileimg' : '/e138630726f84c299f828bfd57e86d8a.jpg',
            'url': '/our-range/building-hardware/building-boards/pegboard'
        },
        'POLYCARBONATE': {
            'mobileimg' : '/3876383d41f14e51a15628a684ad6666.jpg',
            'url': '/our-range/building-hardware/roofing/polycarbonate'
        },
        'STEEL': {
            'mobileimg' : '/03979955c03b448996dd6aee2984a606.jpg',
            'url': '/our-range/building-hardware/roofing/steel'
        },
        'CANOPY': {
            'mobileimg' : '/6fcafeaed41a449f824d43d6b015eabf.jpg',
            'url': '/our-range/building-hardware/roofing/canopy'
        },
        'FLASHING': {
            'mobileimg' : '/593a72c5898842dd97d4e4831ac15108.jpg',
            'url': '/our-range/building-hardware/roofing/flashing'
        },
        'CEMENT PRODUCTS': {
            'mobileimg' : '/147c66818b6c4e91aa5dde74b3eebf1c.jpg',
            'url': '/our-range/building-hardware/cement-concreting/cement-products'
        },
        'CONCRETE': {
            'mobileimg' : '/455c3622a86042ebac05bab3eb4ab01c.jpg',
            'url': '/our-range/building-hardware/cement-concreting/concrete'
        },
        'REINFORCING': {
            'mobileimg' : '/f7cb752263f1434dbe9ca54191ed59a7.jpg',
            'url': '/our-range/building-hardware/cement-concreting/reinforcing'
        },
        'LINTELS': {
            'mobileimg' : '/2a9910bb194d41579db4e8c83a587592.png',
            'url': '/our-range/building-hardware/steel-aluminium-sections/lintels'
        },
        'ALUMINIUM EXTRUSIONS': {
            'mobileimg' : '/eec4664c521140ca83ac5c5666533cc5.jpg',
            'url': '/our-range/building-hardware/steel-aluminium-sections/aluminium-extrusions'
        },
        'STEEL CLADDING': {
            'mobileimg' : '/d1ec1984053e4d2ea60fc143c90cccf8.jpg',
            'url': '/our-range/building-hardware/steel-aluminium-sections/steel-cladding'
        },
        'STEEL SECTIONS': {
            'mobileimg' : '/616bf05ae65e454d9d17639bfb3fa18f.png',
            'url': '/our-range/building-hardware/steel-aluminium-sections/steel-sections'
        },
        'DOOR FURNITURE': {
            'mobileimg' : '/e4359bccba7442d8addf3350f11bff56.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-furniture'
        },
        'DOOR SECURITY': {
            'mobileimg' : '/c50cefdd4c6540dea347fd43e5fe29f4.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-security'
        },
        'DOOR CLOSERS': {
            'mobileimg' : '/5b4613dffd2c4e208ca59830370bb0c0.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-closers'
        },
        'DOOR & WINDOW SEALS': {
            'mobileimg' : '/6e65deb8cd594c83b6e924347a0b8775.png',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-window-seals'
        },
        'DOOR STOPS': {
            'mobileimg' : '/7878ae3763d847059795dd90b749cea6.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-stops'
        },
        'DOOR TRACK': {
            'mobileimg' : '/1362c6370c0a4f75a641cfe29c51671e.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/door-track'
        },
        'WINDOW HARDWARE': {
            'mobileimg' : '/f7a3748ca66443f48163fc114fa2f09d.png',
            'url': '/our-range/building-hardware/door-window-gate-hardware/window'
        },
        'CABINET HARDWARE': {
            'mobileimg' : '/243e23889b7144ffa71768b6f9f0dd9f.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/cabinet'
        },
        'FLY SCREENS': {
            'mobileimg' : '/9477b5205dcb46f7986b1ce046b493f9.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/fly-screens'
        },
        'GATE HARDWARE': {
            'mobileimg' : '/8a4c5bd7f5b6485191853d8e4efd2d2e.jpg',
            'url': '/our-range/building-hardware/door-window-gate-hardware/gate'
        },
        'SAFES & CASHBOXES': {
            'mobileimg' : '/2f2fda6cceb248d395e7773f23d3aa46.jpg',
            'url': '/our-range/building-hardware/general-hardware/safes-cashboxes'
        },
        'ELECTRONIC SECURITY & ALARMS': {
            'mobileimg' : '/b0f5827b4a764444a5588cde74711f25.jpg',
            'url': '/our-range/building-hardware/general-hardware/electronic-security-alarms'
        },
        'PADLOCK & CABLES': {
            'mobileimg' : '/5cdb4aff0a3c45eea7722095ccaaa8ca.png',
            'url': '/our-range/building-hardware/general-hardware/padlock-cables'
        },
        'BRACKETS': {
            'mobileimg' : '/f5a1962ad4ee4877b4f0695dd83098e8.png',
            'url': '/our-range/building-hardware/general-hardware/brackets'
        },
        'FURNITURE & FLOOR PROTECTION': {
            'mobileimg' : '/512630c382004c07bb31db9bf5d81845.jpg',
            'url': '/our-range/building-hardware/general-hardware/furniture-floor-protection'
        },
        'CHILD SAFETY': {
            'mobileimg' : '/1b243affad0a442491d965bc2c90f9fc.jpg',
            'url': '/our-range/building-hardware/general-hardware/child-safety'
        },
        'HOOKS': {
            'mobileimg' : '/c726485ec502470ba37742acf2b94742.jpg',
            'url': '/our-range/building-hardware/general-hardware/hooks'
        },
        'SPRINGS': {
            'mobileimg' : '/c307cb3b886d486d85e8b218a649086e.jpg',
            'url': '/our-range/building-hardware/general-hardware/springs'
        },
        'PICTURE HANGING': {
            'mobileimg' : '/dd1c096d94a64cad8308fc596ee148fa.jpg',
            'url': '/our-range/building-hardware/general-hardware/picture-hanging'
        },
        'TIE DOWN & LOAD RESTRAINTS': {
            'mobileimg' : '/d3b852830c0f4d1d9d0da397cbb35143.jpg',
            'url': '/our-range/building-hardware/general-hardware/tie-down-load-restraints'
        },
        'SCREWS': {
            'mobileimg' : '/9368b24e901d44b68f68d3d2d704ca9f.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/screws'
        },
        'BOLTS': {
            'mobileimg' : '/080d73f70b664a19ac093bbe52e54359.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/bolts'
        },
        'NAILS': {
            'mobileimg' : '/41fcc8db68f8457f9463fbdec9e88001.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/nails'
        },
        'RIVETS': {
            'mobileimg' : '/ff923e3215bf4649b829ca6425b26832.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/rivets'
        },
        'WALL & FLOOR ANCHORS': {
            'mobileimg' : '/2de4c43553e24423a0667796730ba161.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/wall-floor-anchors'
        },
        'COLLATED FASTENERS': {
            'mobileimg' : '/2b2687ec470047b3a9828e5023e61385.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/collated-fasteners'
        },
        'TIMBER CONNECTORS': {
            'mobileimg' : '/337d426c0799475e8f4831d21ebebe92.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/timber-connectors'
        },
        'POST SUPPORTS': {
            'mobileimg' : '/5f42721a96274626ad7ed0507991bda9.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/post-supports'
        },
        'WEDGES & SPACERS': {
            'mobileimg' : '/b4d02e0b78bf47eab51247faf0743675.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/wedges-spacers'
        },
        'GENERAL FASTENERS': {
            'mobileimg' : '/4bdf73a6b4e64085bc80fbb0bbcc8d8f.jpg',
            'url': '/our-range/building-hardware/fixings-fasteners/general-fasteners'
        },
        'INDOOR PLANT POTS': {
            'mobileimg' : '/5d5e81864d234e4ea945a3ee0d358939.jpg',
            'url': '/our-range/garden/pots/indoor-pots'
        },
        'SELF WATERING POTS': {
            'mobileimg' : '/9d9055313a514104929e2558b7205ceb.jpg',
            'url': '/our-range/garden/pots/self-watering-pots'
        },
        'PLANT BASKETS': {
            'mobileimg' : '/dc4bf675025e4f37b831a3fa64f454da.jpg',
            'url': '/our-range/garden/pots/hanging-wall-baskets'
        },
        'PLASTIC PLANT POTS': {
            'mobileimg' : '/9f4af0608f234782a0cff390c0b8ec79.jpg',
            'url': '/our-range/garden/pots/standard-plastic-pots'
        },
        'VERTICAL & WALL GARDENS': {
            'mobileimg' : '/6e12149bb59740db8be9a177ca561817.jpg',
            'url': '/our-range/garden/pots/vertical-gardens'
        },
        'PLANT STANDS & TROLLEYS': {
            'mobileimg' : '/ba89bbaa534b434b882a464659b6662f.png',
            'url': '/our-range/garden/pots/plant-stands-trolleys'
        },
        'OUTDOOR PLANT & GARDEN POTS': {
            'mobileimg' : '/ca327d35528d46e899e92583edbe36d5.jpg',
            'url': '/our-range/garden/pots/outdoor-pots'
        },
        'PLANT POT & PLANTER ACCESSORIES': {
            'mobileimg' : '/166c474a0e5749f5abf946803bdcd1d8.jpg',
            'url': '/our-range/garden/pots/pot-accessories'
        },
        'TIMBER PLANTERS': {
            'mobileimg' : '/8fd56ce0286244a2a33f56d74fbe59a5.jpg',
            'url': '/our-range/garden/pots/timber-planters'
        },
        'WATER FEATURES & FOUNTAINS': {
            'mobileimg' : '/c9a874dae6854d1db25ad24b17f12ce3.jpg',
            'url': '/our-range/garden/garden-decor/water-features'
        },
        'GARDEN PONDS': {
            'mobileimg' : '/ed5f9712ec974573aedc172c54c73671.jpg',
            'url': '/our-range/garden/garden-decor/garden-ponds'
        },
        'LETTERBOXES': {
            'mobileimg' : '/4949f2b0a671476c89b397482c712241.jpg',
            'url': '/our-range/garden/garden-decor/letterboxes'
        },
        'ARTIFICIAL & FAKE PLANTS': {
            'mobileimg' : '/03c644341b8941b89746ba695414bb68.png',
            'url': '/our-range/garden/garden-decor/artificial-plants'
        },
        'BIRD BATHS, HOUSES & FEEDERS': {
            'mobileimg' : '/fc8b4cf589f842ecbd6a11f20af3a2e2.jpg',
            'url': '/our-range/garden/garden-decor/bird-baths-feeders'
        },
        'GARDEN CLOCKS & WALL ART': {
            'mobileimg' : '/245c4ecf416c4530a0cd079e517d1dcd.jpg',
            'url': '/our-range/garden/garden-decor/garden-clocks-wall-art'
        },
        'GARDEN LANTERNS & CANDLES': {
            'mobileimg' : '/1fd1ccbf0d354508a9584c282adf7b82.jpg',
            'url': '/our-range/garden/garden-decor/garden-lanterns-candles'
        },
        'GARDEN STATUES & GNOMES': {
            'mobileimg' : '/3dd17a74d2c94bf4922ecdaa806a0a65.png',
            'url': '/our-range/garden/garden-decor/garden-statues-gnomes'
        },
        'FERTILISERS': {
            'mobileimg' : '/0f7c9e472ad94aeb85af3f2c2669823e.jpg',
            'url': '/our-range/garden/gardening/fertilisers'
        },
        'POTTING MIXES, COMPOSTS, MULCHES & MANURES': {
            'mobileimg' : '/6c1267c947c042c69b9ea65325a97c42.jpg',
            'url': '/our-range/garden/gardening/potting-mixes-composts-mulches-manures'
        },
        'GARDEN SPRAYERS': {
            'mobileimg' : '/548b757fd6224fa485a647e3bfe8d60a.jpg',
            'url': '/our-range/garden/gardening/sprayers'
        },
        'COMPOSTING': {
            'mobileimg' : '/25da1100ebdf419d98a4da3a0ae64e32.jpg',
            'url': '/our-range/garden/gardening/composting'
        },
        'LAWN MOWERS': {
            'mobileimg' : '/1be66a14bce140d4b4e2067abded1aa1.jpg',
            'url': '/our-range/garden/garden-tools/lawn-mowers'
        },
        'WHIPPER SNIPPERS & LINE TRIMMERS': {
            'mobileimg' : '/0aed2fc0b8134c4197eadd7d6922957d.jpg',
            'url': '/our-range/garden/garden-tools/line-trimmer'
        },
        'BLOWER VAC & LEAF BLOWERS': {
            'mobileimg' : '/4e6bb9c2f36e45d19d2ab20e813bc952.jpg',
            'url': '/our-range/garden/garden-tools/blower-vacs'
        },
        'LAWN AERATORS': {
            'mobileimg' : '/ae2f8b9273754b188e122abba4b5bde9.jpg',
            'url': '/our-range/garden/garden-tools/lawn-aerators'
        },
        'HEDGE TRIMMERS': {
            'mobileimg' : '/4f48003a266a4b7c82f1ed19ce5496a4.jpg',
            'url': '/our-range/garden/garden-tools/hedge-trimmers'
        },
        'CHAINSAWS': {
            'mobileimg' : '/3f3968d608854ad7a79a62ee9b293c4c.jpg',
            'url': '/our-range/garden/garden-tools/chainsaws'
        },
        'GARDEN CORDLESS COMBO KITS': {
            'mobileimg' : '/1326138e04c04955bc67fba7399efbbb.jpg',
            'url': '/our-range/garden/garden-tools/combo-kits'
        },
        'GARDEN TOOL BATTERIES & ACCESSORIES': {
            'mobileimg' : '/8e346d96e78d42df90d930c2f51d1ab3.jpg',
            'url': '/our-range/garden/garden-tools/garden-batteries-accessories'
        },
        'GARDEN TROLLEYS & WHEELED TOOLS': {
            'mobileimg' : '/b5cbbca17faa4f1d9a1af6a1c792de8d.jpg',
            'url': '/our-range/garden/garden-tools/garden-trolleys-wheeled-tools'
        },
        'DIGGING TOOLS': {
            'mobileimg' : '/2ff10a15a596412da3b134dc311917e4.png',
            'url': '/our-range/garden/garden-tools/digging-tools'
        },
        'PERGOLAS': {
            'mobileimg' : '/70d4ebfd91cd422b8c9815c596886a8f.jpg',
            'url': '/our-range/garden/outdoor-structures/pergolas'
        },
        'SHEDS': {
            'mobileimg' : '/f2425c6d39a94441b59bc2d49c281221.jpg',
            'url': '/our-range/garden/outdoor-structures/sheds'
        },
        'SHED ACCESSORIES & ATTACHMENTS': {
            'mobileimg' : '/85c71a1b86d149ecbb3d8c6332b0db92.jpg',
            'url': '/our-range/garden/outdoor-structures/shed-accessories'
        },
        'GARAGES & CARPORTS': {
            'mobileimg' : '/34ce7ab1a66a4347ac0fe1dfe5e25114.jpg',
            'url': '/our-range/garden/outdoor-structures/garages-carports'
        },
        'PATIO ROOFS & COVERS': {
            'mobileimg' : '/f66dc60e8da0402ebf359a30bf1b0ced.jpg',
            'url': '/our-range/garden/outdoor-structures/patio-roofs-covers'
        },
        'GREENHOUSE & SHADEHOUSE': {
            'mobileimg' : '/b1c1d7da29ab4616b1aec6b23aeb4784.jpg',
            'url': '/our-range/garden/outdoor-structures/greenhouse-shadehouse'
        },
        'RAISED GARDEN BEDS': {
            'mobileimg' : '/f92b3a9f80dc43029ec0d278e0dce8a6.jpg',
            'url': '/our-range/garden/outdoor-structures/garden-beds'
        },
        'GARDEN ARCH': {
            'mobileimg' : '/6d269924c540487999ce52a8aa3170b0.jpg',
            'url': '/our-range/garden/outdoor-structures/garden-arch'
        },
        'PET ENCLOSURES & STRUCTURES': {
            'mobileimg' : '/70750e2e8abe4b369efc68d647d703f2.jpg',
            'url': '/our-range/garden/outdoor-structures/pet-structures'
        },
        'GARDEN SCREEN': {
            'mobileimg' : '/9bd576c8412c423491e1e115cceb8cb3.jpg',
            'url': '/our-range/garden/landscaping/garden-screen'
        },
        'PAVING, STONES & MASONRY': {
            'mobileimg' : '/38a73af3e8db4a3497eca9427bd3b29c.jpg',
            'url': '/our-range/garden/landscaping/paving-stones'
        },
        'GARDEN BED EDGING': {
            'mobileimg' : '/0dff8aedebad46258a24e6fe1d23426f.png',
            'url': '/our-range/garden/landscaping/garden-edging'
        },
        'GARDEN TRELLIS & STAKES': {
            'mobileimg' : '/380e29883ff441839a8cbd529b1de3c0.jpg',
            'url': '/our-range/garden/landscaping/plant-support'
        },
        'WIRE FENCING & FENCING POSTS': {
            'mobileimg' : '/a5cbefb3db5a4c8f82668ccd2aed898f.jpg',
            'url': '/our-range/garden/landscaping/wire-fencing-posts'
        },
        'BIRD SPIKES': {
            'mobileimg' : '/509359e8e7fc430b8fc8d5e00479239a.jpg',
            'url': '/our-range/garden/pest-control/bird-spikes'
        },
        'FAKE & DECOY OWLS': {
            'mobileimg' : '/e025bd1442e148678514cd2cfdb66d32.jpg',
            'url': '/our-range/garden/pest-control/fake-decoy-owls'
        },
        'LAWN PEST & WEED CONTROL': {
            'mobileimg' : '/8e6c7efd959a49d8affc10ed28a0151d.jpg',
            'url': '/our-range/garden/pest-control/pest-weed-control'
        },
        'WEED KILLER & GARDEN PEST CONTROL': {
            'mobileimg' : '/e22a16c2d14e4be7afb7f85bd4cb3827.jpg',
            'url': '/our-range/garden/pest-control/garden-pest-weed-control'
        },
        'HOUSEHOLD PEST CONTROL': {
            'mobileimg' : '/fbe3e3da337641d39e3212822480237c.jpg',
            'url': '/our-range/garden/pest-control/household-pest-control'
        },
        'PLANT PROTECTION': {
            'mobileimg' : '/2c92747d08a14fb098d33ac2fea88f36.jpg',
            'url': '/our-range/garden/pest-control/plant-protection'
        },
        'GARDEN VEGETABLE SEEDLINGS': {
            'mobileimg' : '/6419157ef4bb4c19b8f262fedfeb15ed.jpg',
            'url': '/our-range/garden/plants/vegetable-seedlings'
        },
        'HERBS': {
            'mobileimg' : '/23d8be9426884577b7af59d6ba381712.jpg',
            'url': '/our-range/garden/plants/herbs'
        },
        'FRUIT TREES & PLANTS': {
            'mobileimg' : '/1e2d2b4501934ee09e3d2e92b79a07bd.png',
            'url': '/our-range/garden/plants/fruit-trees-and-plants'
        },
        'FLOWERING PLANTS': {
            'mobileimg' : '/416b328f69b84925806c9dc59b1e3064.jpg',
            'url': '/our-range/garden/plants/flowering-plants'
        },
        'COTTAGE PLANTS': {
            'mobileimg' : '/658209eb10974c4ca6fd2bab4459b5dc.jpg',
            'url': '/our-range/garden/plants/cottage-plants'
        },
        'ROSES': {
            'mobileimg' : '/1d67e9febded4db2a4e6f42895284ba3.jpg',
            'url': '/our-range/garden/plants/roses'
        },
        'CLIMBING PLANTS': {
            'mobileimg' : '/d3d2c81d12484902b88652f4759ccb46.png',
            'url': '/our-range/garden/plants/climbing-plants'
        },
        'GROUND COVER PLANTS': {
            'mobileimg' : '/45475b99deb348fdbb44eb6d63bd9f78.jpg',
            'url': '/our-range/garden/plants/ground-cover-plant'
        },
        'HANGING BASKET PLANTS': {
            'mobileimg' : '/18a14241abcc462a837c62a67302d447.jpg',
            'url': '/our-range/garden/plants/potted-hanging-baskets'
        },
        'INDOOR PLANTS & FLOWERS': {
            'mobileimg' : '/8f13113e702443b0ac71a28091f21a80.jpg',
            'url': '/our-range/garden/plants/indoor-house-plants'
        },
        'WATER CRYSTALS & WETTING AGENTS': {
            'mobileimg' : '/b8dbe5d7cb7249fd996f4bfa2ae1f816.jpg',
            'url': '/our-range/garden/watering-accessories/wetting-agents'
        },
        'HOSES': {
            'mobileimg' : '/43e5030de1fb4ebfad7ed702be191d98.jpg',
            'url': '/our-range/garden/watering-accessories/garden-hoses'
        },
        'HOSE FITTINGS & CONNECTORS': {
            'mobileimg' : '/cda85b4ad47247c1bc0d91bdaef3b1d7.jpg',
            'url': '/our-range/garden/watering-accessories/hose-end-fittings'
        },
        'HOSE REELS, CARTS & HANGERS': {
            'mobileimg' : '/fff70095b67949e3997c394e8ccfd5b5.png',
            'url': '/our-range/garden/watering-accessories/hose-reels-hangers'
        },
        'HOSE NOZZLES, GUNS & WANDS': {
            'mobileimg' : '/903fe93254af4cb79c59276c6f857554.jpg',
            'url': '/our-range/garden/watering-accessories/hose-guns-wands'
        },
        'HOSE END SPRINKLERS': {
            'mobileimg' : '/ed1def3598bf493fb532950068d47e68.jpg',
            'url': '/our-range/garden/watering-accessories/hose-end-sprinklers'
        },
        'WATERING CANS': {
            'mobileimg' : '/fab09d3db8ae465783e2ba9351de9011.jpg',
            'url': '/our-range/garden/watering-accessories/watering-cans'
        },
        'IRRIGATION & GARDEN WATERING SYSTEM': {
            'mobileimg' : '/b51e3deced7747a0b67a124df05864d1.jpg',
            'url': '/our-range/garden/watering-accessories/irrigation'
        },
        'WATERING CONTROL': {
            'mobileimg' : '/f05a9d9c55004d9ab5ba23c0ddaf5f9a.jpg',
            'url': '/our-range/garden/watering-accessories/watering-control'
        },
        'WATER CONSERVATION & RAIN HARVESTING': {
            'mobileimg' : '/26f4308b1e82404fa5261539743218a8.png',
            'url': '/our-range/garden/watering-accessories/watering-conservation'
        },
        'INSTANT TURF': {
            'mobileimg' : '/5fbed4e2769b4bbeb5bf1bc12c829171.jpg',
            'url': '/our-range/garden/lawn/instant-turf'
        },
        'SYNTHETIC TURF': {
            'mobileimg' : '/f3d8bd679d1a445eb354e6b0fd663612.jpg',
            'url': '/our-range/garden/lawn/synthetic-turf'
        },
        'GRASS & LAWN SEEDS': {
            'mobileimg' : '/c70f02e477bf463cbbeece3d2b46244a.jpg',
            'url': '/our-range/garden/lawn/seeds'
        },
        'LAWN FERTILISERS': {
            'mobileimg' : '/42af5cc7074a45979656c2373761a03c.jpg',
            'url': '/our-range/garden/lawn/fertiliser'
        },
        'LAWN FERTILISER SPREADERS': {
            'mobileimg' : '/0227ed51f1b742c78a0f8402ed183fab.jpg',
            'url': '/our-range/garden/lawn/spreaders'
        },
        'FLOWER BULBS': {
            'mobileimg' : '/b09afad6af4e4981b0694b92c239e925.jpg',
            'url': '/our-range/garden/seeds-propagation/bulbs'
        },
        'SEED STARTERS & GROWING KITS': {
            'mobileimg' : '/d6a2f253b170402d8fc676cc2879d297.jpg',
            'url': '/our-range/garden/seeds-propagation/kits'
        },
        'FLOWER SEEDS': {
            'mobileimg' : '/da625272174a4d63bf63261b621b9ea5.png',
            'url': '/our-range/garden/seeds-propagation/flower'
        },
        'VEGETABLE SEEDS': {
            'mobileimg' : '/3e88891b8bf247b38f09b79abf35775b.png',
            'url': '/our-range/garden/seeds-propagation/vegetable'
        },
        'HERB SEEDS': {
            'mobileimg' : '/4879da8d425a4913b5c0fc260379b4fe.jpg',
            'url': '/our-range/garden/seeds-propagation/herb'
        },
        'PROPAGATION EQUIPMENT': {
            'mobileimg' : '/7f437facdbb146dc8372493863912508.jpg',
            'url': '/our-range/garden/seeds-propagation/equipment'
        },
        'EARMUFFS': {
            'mobileimg' : '/9ca3da435c4048dc83da5b436fb8616b.jpg',
            'url': '/our-range/garden/garden-safety-equipment/earmuffs'
        },
        'FACE SHIELDS': {
            'mobileimg' : '/13dce93cdc9d4d61b45358ad30593c42.jpg',
            'url': '/our-range/garden/garden-safety-equipment/face-shields'
        },
        'PROTECTIVE CLOTHING': {
            'mobileimg' : '/92e2523f0ac243d68e965ae6c7164efd.jpg',
            'url': '/our-range/garden/garden-safety-equipment/protective-clothing'
        },
        'RESPIRATORS': {
            'mobileimg' : '/ddb611fd494841f49e86f2d1c8db0510.jpg',
            'url': '/our-range/garden/garden-safety-equipment/respirators'
        },
        'KNEELING PADS & KNEELERS': {
            'mobileimg' : '/8b890a47e5e345ab8742f8a5e72c2906.jpg',
            'url': '/our-range/garden/garden-safety-equipment/kneeling-pads-kneelers'
        },
        'GARDENING GLOVES': {
            'mobileimg' : '/cdeefd9c766045709cd36a16c5a03068.jpg',
            'url': '/our-range/garden/garden-safety-equipment/gloves'
        },
        'WORK BOOTS': {
            'mobileimg' : '/6d5a35ff0eb240918bb5ad535ff73ff4.jpg',
            'url': '/our-range/garden/garden-safety-equipment/work-boots'
        },
        'GUMBOOTS': {
            'mobileimg' : '/dcb894b810884557843fc920edab8ed6.jpg',
            'url': '/our-range/garden/garden-safety-equipment/gumboots'
        },
        'WORKWEAR': {
            'mobileimg' : '/4fa7ae0da7434749a4bdcf5f83f20b5d.jpg',
            'url': '/our-range/garden/garden-safety-equipment/workwear'
        },
        '2 & 3 BURNER BBQ': {
            'mobileimg' : '/d914d85acef7411bacd9b667feeb020c.jpg',
            'url': '/our-range/outdoor-living/barbecue/2-3-burner'
        },
        '4 & 5 BURNER BBQS': {
            'mobileimg' : '/e87545286a78493ebf8017a16b199568.png',
            'url': '/our-range/outdoor-living/barbecue/4-5-burner'
        },
        '6 BURNER BBQ': {
            'mobileimg' : '/5f781e0fc0a6462397e100ce6d840473.png',
            'url': '/our-range/outdoor-living/barbecue/6-burner'
        },
        'BUILT-IN BBQ': {
            'mobileimg' : '/3cb9a7fff68942e495dd5abd95315ee1.png',
            'url': '/our-range/outdoor-living/barbecue/built-in-bbq'
        },
        'CAMPING STOVES': {
            'mobileimg' : '/19672e80050e4cd287f2e837e2d7746b.jpg',
            'url': '/our-range/outdoor-living/barbecue/camping-stoves'
        },
        'PIZZA OVENS': {
            'mobileimg' : '/1123bf090c78464da434f615df0910cb.jpg',
            'url': '/our-range/outdoor-living/barbecue/pizza-ovens'
        },
        'SMOKER BBQS': {
            'mobileimg' : '/b83108d9c7364bb8a4db088f4ac7be28.jpg',
            'url': '/our-range/outdoor-living/barbecue/smoker-bbqs'
        },
        'KETTLE BBQ': {
            'mobileimg' : '/02cbacdac48e4915b8fa14d06c0a16c9.jpg',
            'url': '/our-range/outdoor-living/barbecue/kettle'
        },
        'PORTABLE BBQ': {
            'mobileimg' : '/c3540c214f714270be8575bd61e5b0b3.jpg',
            'url': '/our-range/outdoor-living/barbecue/portable'
        },
        'OUTDOOR BBQ KITCHENS': {
            'mobileimg' : '/df9e5283b3ac43f18f159fdf54fea1e5.jpg',
            'url': '/our-range/outdoor-living/barbecue/outdoor-bbq-kitchens'
        },
        'OUTDOOR STORAGE BOXES': {
            'mobileimg' : '/3254847a60fa4bc5bbac693ce05e0671.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/outdoor-storage'
        },
        'OUTDOOR SETTINGS': {
            'mobileimg' : '/9f0ed637c5684875be25ec87a1ee3665.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/settings'
        },
        'OUTDOOR & GARDEN BENCHES': {
            'mobileimg' : '/a2b1baf3381d43699f259b949ac1daff.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/benches'
        },
        'KIDS OUTDOOR FURNITURE': {
            'mobileimg' : '/dec17328fc4a4809838307d51cc3456b.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/kids-furniture'
        },
        'OUTDOOR & GARDEN CHAIRS': {
            'mobileimg' : '/2540c2629c734092b194fc01716252bb.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/chairs'
        },
        'OUTDOOR TABLES': {
            'mobileimg' : '/bcf1e96440de4112bf6f1cb067975897.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/tables'
        },
        'OUTDOOR LOUNGE FURNITURE': {
            'mobileimg' : '/81273e6981a14faba2fdb09c13a85996.png',
            'url': '/our-range/outdoor-living/outdoor-furniture/outdoor-lounge-furniture'
        },
        'CAFÉ FURNITURE': {
            'mobileimg' : '/eb7cb34d6f06493ba70bf8872616a115.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/cafe-furniture'
        },
        'OUTDOOR CUSHIONS': {
            'mobileimg' : '/61a8f28b1e7742d7836fc98f98948351.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/cushions'
        },
        'OUTDOOR BEAN BAGS': {
            'mobileimg' : '/9f579c9274f14a93a0e0564baa5d351a.jpg',
            'url': '/our-range/outdoor-living/outdoor-furniture/bean-bags'
        },
        'BRAZIERS & FIREPITS': {
            'mobileimg' : '/a4379adade444ead9a8c62d292ee0e26.jpg',
            'url': '/our-range/outdoor-living/outdoor-heating/braziers-firepits'
        },
        'FIRE STARTERS & FUELS': {
            'mobileimg' : '/5686f5b034b24874916ed1a03499f59d.png',
            'url': '/our-range/outdoor-living/outdoor-heating/fuels'
        },
        'WOOD HEATERS': {
            'mobileimg' : '/9402b3d2ce8d4ac3bbb7f10ffb84ea91.png',
            'url': '/our-range/outdoor-living/outdoor-heating/wood'
        },
        'OUTDOOR GAS HEATERS': {
            'mobileimg' : '/7b39aeb55a5d4bc986e45c2a6e68a235.jpg',
            'url': '/our-range/outdoor-living/outdoor-heating/gas'
        },
        'OUTDOOR ELECTRIC HEATERS': {
            'mobileimg' : '/0f18b585df704458bb769e890f1da045.jpg',
            'url': '/our-range/outdoor-living/outdoor-heating/electric'
        },
        'FIREPLACE & HEATER ACCESSORIES': {
            'mobileimg' : '/e5715aca473d4d7aad93f13413f211e9.jpg',
            'url': '/our-range/outdoor-living/outdoor-heating/accessories'
        },
        'GAZEBOS': {
            'mobileimg' : '/4b4dec1da57e4b6f978cbeb8276724b2.jpg',
            'url': '/our-range/outdoor-living/outdoor-shade/gazebos'
        },
        'UMBRELLAS': {
            'mobileimg' : '/5b856b762560430f8ceecb0d2c85308a.jpg',
            'url': '/our-range/outdoor-living/outdoor-shade/umbrellas'
        },
        'SHADE SAILS': {
            'mobileimg' : '/6d166df10f084909b0dc7826cb7fc4b4.jpg',
            'url': '/our-range/outdoor-living/outdoor-shade/shade-sails'
        },
        'SHADE CLOTH': {
            'mobileimg' : '/902af45c0f6d4f3280f6df8f5ae7f105.jpg',
            'url': '/our-range/outdoor-living/outdoor-shade/shade-cloth'
        },
        'SHADE CLOTH FASTENERS & ACCESSORIES': {
            'mobileimg' : '/c64155fd20fa457dbab2b4cb38c8d140.jpg',
            'url': '/our-range/outdoor-living/outdoor-shade/accessories'
        },
        'TARPAULIN & TARPS': {
            'mobileimg' : '/1acf00b3e86d4652b4f040a0255f0caa.jpg',
            'url': '/our-range/outdoor-living/outdoor-shade/tarpaulin'
        },
        'SWIMMING POOLS': {
            'mobileimg' : '/632a8ecacccd46b084db923952e59871.jpg',
            'url': '/our-range/outdoor-living/swimming-pools-spa/swimming-pools'
        },
        'POOLS & SPA ACCESSORIES': {
            'mobileimg' : '/c497985df61543ff99d8ba070073678a.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/pools-spa-accessories'
        },
        'CHLORINE': {
            'mobileimg' : '/83cd1542515a44649e78df125acca08a.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/chlorine'
        },
        'POOL & SPA CHEMICALS': {
            'mobileimg' : '/f846fca8798c41e4a1ef7493595c9fab.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/chemicals'
        },
        'POOL SALT': {
            'mobileimg' : '/31b85ab7c6294d048fed6fcf8276a2e3.jpg',
            'url': '/our-range/outdoor-living/swimming-pools-spa/pool-salt'
        },
        'OUTDOOR SHOWERS': {
            'mobileimg' : '/6aff73693cdc41d98e9c88bfa5b425f2.png',
            'url': '/our-range/outdoor-living/swimming-pools-spa/outdoor-showers'
        },
        'SWING SETS': {
            'mobileimg' : '/dcc2d7e94c79490bab74aa227c30a4c1.jpg',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/swing-sets'
        },
        'CUBBY HOUSES': {
            'mobileimg' : '/2b4dd6c22f6148a2b1537390daf85953.png',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/cubby-houses'
        },
        'SANDPITS': {
            'mobileimg' : '/70433f3c53f1493cbb763fae67aa839c.jpg',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/sandpits'
        },
        'SLIDES': {
            'mobileimg' : '/82dc1e9fa41648f780afce8fe486c0df.jpg',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/slides'
        },
        'PLAY EQUIPMENT ACCESSORIES': {
            'mobileimg' : '/1da79a87ccaf4f67946aa69fefb4abb9.jpg',
            'url': '/our-range/outdoor-living/outdoor-play-equipment/accessories'
        },
        'ICE BOXES': {
            'mobileimg' : '/97a1c469fd234728abb32dc23dad61ed.jpg',
            'url': '/our-range/outdoor-living/coolers/ice-boxes'
        },
        'COOLER BAGS': {
            'mobileimg' : '/6acd63ec455348b1b4da29fbfd3d6ab3.jpg',
            'url': '/our-range/outdoor-living/coolers/cooler-bags'
        },
        'ICE BRICKS & GEL PACKS': {
            'mobileimg' : '/e8b4e02deab74b789453ccb2b1a69df0.jpg',
            'url': '/our-range/outdoor-living/coolers/accessories'
        },
        'MOSQUITO REPELLENT': {
            'mobileimg' : '/75bbd71b2aac472b923a5d399c5bbd8a.jpg',
            'url': '/our-range/outdoor-living/insect-control/insect-repellent'
        },
        'SUNSCREEN': {
            'mobileimg' : '/b0b24aab399f4981a7c3ff039bd1b37d.jpg',
            'url': '/our-range/outdoor-living/insect-control/sunscreen'
        },
        'CITRONELLA CANDLES & COILS': {
            'mobileimg' : '/fba2a40e705e4721af0134b697b164b0.jpg',
            'url': '/our-range/outdoor-living/insect-control/citronella-candles'
        },
        'CITRONELLA OIL & FLARES': {
            'mobileimg' : '/4771bdddf3b14860a7337e5bc75ffde7.jpg',
            'url': '/our-range/outdoor-living/insect-control/citronella-flares-oils'
        },
        'BUG ZAPPERS': {
            'mobileimg' : '/764a70560f9a463a837a439c1a7be6ab.jpg',
            'url': '/our-range/outdoor-living/insect-control/electric-insect-control'
        },
        'PICNIC BLANKETS': {
            'mobileimg' : '/120363c9de6a47a39ac1aa12fbc46e33.jpg',
            'url': '/our-range/outdoor-living/picnicware/picnic-rugs'
        },
        'VACUUM FLASKS & JUGS': {
            'mobileimg' : '/203ec6a7836d4028b6a611899b9f0bc3.jpg',
            'url': '/our-range/outdoor-living/picnicware/flasks-bottles'
        },
        'WATER JERRY CANS': {
            'mobileimg' : '/babaa49d9d8443bda94b881179a83002.jpg',
            'url': '/our-range/outdoor-living/picnicware/portable-water-storage'
        },
        'APARTMENT KITCHEN': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/apartment-kitchen_bbundle00291'
        },
        'CULINARY DELIGHT KITCHEN': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/culinary-delight-kitchen-_bbundle00371'
        },
        'THE CLASSIC KITCHEN': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/the-classic-kitchen_bbundle00451'
        },
        'URBAN COTTAGE KITCHEN': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/urban-cottage-kitchen_bbundle00721'
        },
        'KITCHEN CABINETS': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/cabinets'
        },
        'KITCHEN DOORS': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/doors'
        },
        'DRAWERS': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/drawers'
        },
        'KICKBOARDS & PANELS': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/kickboards-panels'
        },
        'ACCESSORIES': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/accessories'
        },
        'KITCHEN PACKAGES': {
            'mobileimg' : '/ecb79c884d314e258ecc67cb852e05d4.png',
            'url': '/our-range/kitchen/cabinets-accessories/kitchen-packages'
        },
        'LAMINATED BENCHTOPS': {
            'mobileimg' : '/df680f3f0eab47989077c963474fb26b.jpg',
            'url': '/our-range/kitchen/benchtops/laminated'
        },
        'TIMBER BENCHTOPS': {
            'mobileimg' : '/8cb1b63fff0f4cc0aceae36ef5fd97a1.jpg',
            'url': '/our-range/kitchen/benchtops/timber'
        },
        'STONE BENCHTOPS': {
            'mobileimg' : '/9e2e8df5627d474eab36db4a4469d7f6.jpg',
            'url': '/our-range/kitchen/benchtops/stone'
        },
        'SOLID SURFACE BENCHTOPS': {
            'mobileimg' : '/9b008da43f4249609807c363bb849a44.jpg',
            'url': '/our-range/kitchen/benchtops/solid-surface'
        },
        'KITCHEN TAPS': {
            'mobileimg' : '/471fbc9a8ef44393ba52c47f0100c9e3.jpg',
            'url': '/our-range/kitchen/kitchen-taps-sinks/taps'
        },
        'KITCHEN SINKS': {
            'mobileimg' : '/dbc634507efd42cbb2dad25dc8874cc2.jpg',
            'url': '/our-range/kitchen/kitchen-taps-sinks/sinks'
        },
        'WATER FILTRATION': {
            'mobileimg' : '/d8153b207a8942e2a2c281dcaefaec28.jpg',
            'url': '/our-range/kitchen/kitchen-taps-sinks/water-filtration'
        },
        'WASTE DISPOSALS': {
            'mobileimg' : '/4aa1c8c75a294fa0a9c22a63ffe84a08.jpg',
            'url': '/our-range/kitchen/kitchen-taps-sinks/waste-disposals'
        },
        'ACRYLIC SPLASHBACKS': {
            'mobileimg' : '/c70f1ff23a9d41639c30b83f2e4ae7d6.png',
            'url': '/our-range/kitchen/splashbacks/acrylic'
        },
        'GLASS SPLASHBACKS': {
            'mobileimg' : '/5431d232b5e24d31a4fecd37ad808f07.png',
            'url': '/our-range/kitchen/splashbacks/glass'
        },
        'SPLASHBACK EXTRUSIONS': {
            'mobileimg' : '/275d0032d1354b7580add8f213e2ec00.png',
            'url': '/our-range/kitchen/splashbacks/splashback-extrusions'
        },
        'BUILT IN OVENS': {
            'mobileimg' : '/e9c5140e79fc4e9281dcbc44ba49dac3.jpg',
            'url': '/our-range/kitchen/appliances/built-in-ovens'
        },
        'UPRIGHT OVENS': {
            'mobileimg' : '/9bb63914d7b3480ca7a8642adb8bc5d4.jpg',
            'url': '/our-range/kitchen/appliances/upright-ovens'
        },
        'COOKTOPS': {
            'mobileimg' : '/18c4fd5c039e4b6ca6e5bbc52facc870.jpg',
            'url': '/our-range/kitchen/appliances/cooktops'
        },
        'RANGEHOODS': {
            'mobileimg' : '/330179736e2144a6972d146173f8ad31.jpg',
            'url': '/our-range/kitchen/appliances/rangehoods'
        },
        'VENTILATION': {
            'mobileimg' : '/8c1104dc8726410caf152be185b8254d.jpg',
            'url': '/our-range/kitchen/appliances/ventilation'
        },
        'DISHWASHERS': {
            'mobileimg' : '/ab3814383fdb4211900cff38627e2fe9.jpg',
            'url': '/our-range/kitchen/appliances/dishwashers'
        },
        'RETREAT BATHROOM': {
            'mobileimg' : '/3e64085e67154da6a4259b4049824d0f.png',
            'url': '/retreat-bathroom_bbundle0082'
        },
        'SHOWERS': {
            'mobileimg' : '/a7e73b29f9724e7191ccb79000bc0660.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/showers'
        },
        'BATHROOM TAPWARE': {
            'mobileimg' : '/a7008e1460274bca87914091b69eba15.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/tapware'
        },
        'VANITIES & MIRRORS': {
            'mobileimg' : '/1ebf4110550b4d89a7cca4f1469cdfc9.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/vanities-mirrors'
        },
        'TOILETS': {
            'mobileimg' : '/80fb36d9875842d498fe7a38e5fa48a3.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/toilets'
        },
        'BASINS & VESSELS': {
            'mobileimg' : '/bec85868b25842458eed4867ee237d8a.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/basins-vessels'
        },
        'BATHS': {
            'mobileimg' : '/59f83701b65f4d4795fe734d992f3c11.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/baths-spas'
        },
        'INDEPENDENT LIVING AIDS': {
            'mobileimg' : '/17cdefe2483c45d8bd67249e70bc2d32.png',
            'url': '/our-range/bathroom-plumbing/bathroom/independent-living-aids'
        },
        'BATHROOM ACCESSORIES': {
            'mobileimg' : '/4d2259a7dd764ec8be014cbfc8ce3fa6.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/accessories'
        },
        'BATHROOM DÉCOR': {
            'mobileimg' : '/108c337a4849452da9c8f8935179b25d.jpg',
            'url': '/our-range/bathroom-plumbing/bathroom/decor'
        },
        'HOT WATER UNITS': {
            'mobileimg' : '/e520d4a510e24e7480a2a95545319862.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/hot-water-units'
        },
        'PIPE & FITTINGS': {
            'mobileimg' : '/421b9990248d4d13ada75428ef858374.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/pipe-fittings'
        },
        'PLUMBING TOOLS': {
            'mobileimg' : '/2d037a345ac243ed89b4161a40d307c5.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/tools'
        },
        'TAP & TOILET SPARES': {
            'mobileimg' : '/987c35ac77f249f1a6f08aeafbaf10c9.png',
            'url': '/our-range/bathroom-plumbing/plumbing/tap-toilet-spares'
        },
        'DRAINAGE': {
            'mobileimg' : '/e2b21089def04cebacdc546199131307.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/drainage'
        },
        'GUTTERING & SPOUTING': {
            'mobileimg' : '/5b7249c7024b4dc3861d42ebbfe63997.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/guttering-spouting'
        },
        'PUMPS': {
            'mobileimg' : '/281f7400ec13454f92e1c772850388d8.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/pumps'
        },
        'WATER TANKS': {
            'mobileimg' : '/099105116d44420d897aeb7c6a1294f8.jpg',
            'url': '/our-range/bathroom-plumbing/plumbing/water-tanks'
        },
        'INDOOR ROLLER BLINDS': {
            'mobileimg' : '/455720a95ac9400aa9a71c0e864e4290.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/roller'
        },
        'INDOOR SHUTTER BLINDS': {
            'mobileimg' : '/827f1589db8f47d6921fb21b8554b680.png',
            'url': '/our-range/curtains-blinds/indoor-blinds/shutter-blinds'
        },
        'ROMAN BLINDS': {
            'mobileimg' : '/ebdd7a03ddce4d10abbe5cc60fa5f94e.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/roman'
        },
        'TIMBER VENETIAN BLINDS': {
            'mobileimg' : '/041a257c97cc4e43ba95da1a33bbfc22.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/timber-venetian'
        },
        'PVC VENETIAN BLINDS': {
            'mobileimg' : '/5601cf1f493340dc85b17d73869d5ee2.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/pvc-venetian'
        },
        'ALUMINIUM VENETIAN BLINDS': {
            'mobileimg' : '/feb3771badb143e1a4dd3788be37c7c9.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/aluminium-venetian'
        },
        'VERTICAL BLINDS': {
            'mobileimg' : '/e84e318c873b4d76aa6754363c146804.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/vertical'
        },
        'CELLULAR BLINDS': {
            'mobileimg' : '/635575dd07e44617b55d3e6476ecdcde.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/cellular'
        },
        'INDOOR BLINDS ACCESSORIES': {
            'mobileimg' : '/292b4f43e5ef458f9d1b28994981f5f8.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/indoor-blinds-accessories'
        },
        'MATCHSTICK BLINDS': {
            'mobileimg' : '/a6af197af20a42ae93b6d86753456a2a.jpg',
            'url': '/our-range/curtains-blinds/indoor-blinds/matchstick'
        },
        'ROLL UP BLINDS': {
            'mobileimg' : '/650a169a535647f58b4ca53354a25359.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/roll-up'
        },
        'RETRACTABLE BLINDS': {
            'mobileimg' : '/fa3bc3f4b1424e5785d054b38ebe22db.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/retractable'
        },
        'OUTDOOR ROLLER BLINDS': {
            'mobileimg' : '/a5857806fbaa4207bd046378d27dc2e4.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/roller'
        },
        'AWNING BLINDS': {
            'mobileimg' : '/42e5a0b0b619418e91eda1e9699222a5.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/awning'
        },
        'OUTDOOR BAMBOO BLINDS': {
            'mobileimg' : '/2ddc9ee2299940d393e8e7e2e8ff8aaf.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/bamboo'
        },
        'BISTRO BLINDS': {
            'mobileimg' : '/f5c17c34ce3f476e829b2c96d8ad14b2.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/bistro'
        },
        'BISTRO BLIND ACCESSORIES': {
            'mobileimg' : '/06178d22381e473ca615864f58539d6e.jpg',
            'url': '/our-range/curtains-blinds/outdoor-blinds/bistro-blind-accessories'
        },
        'CURTAINS': {
            'mobileimg' : '/7349042085304ed58c31b948d15a9f86.jpg',
            'url': '/our-range/curtains-blinds/curtain-accessories/curtains'
        },
        'CURTAIN RAILS': {
            'mobileimg' : '/9f420443c8774112814d67087026c9eb.jpg',
            'url': '/our-range/curtains-blinds/curtain-accessories/rails'
        },
        'CURTAIN TRACKS': {
            'mobileimg' : '/806883d42b2b4355ae3765b9996e79c1.jpg',
            'url': '/our-range/curtains-blinds/curtain-accessories/tracks'
        },
        'CURTAIN RODS, BRACKETS & HOOKS': {
            'mobileimg' : '/0598e7f73b194169a8800845565f8311.jpg',
            'url': '/our-range/curtains-blinds/curtain-accessories/curtain-accessories'
        },
        'CUSTOM ROLLER BLINDS': {
            'mobileimg' : '/d74844e2ccd548c9b8985bbb5582fdc7.jpg',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-roller-blinds'
        },
        'CUSTOM ROMAN BLINDS': {
            'mobileimg' : '/02ba8a54bf9549aa97183f8cdd04ac30.jpg',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-roman-blinds'
        },
        'CUSTOM VENETIAN BLINDS': {
            'mobileimg' : '/5e80ba806bc44d0ca9391de3b50f03ef.jpg',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-venetian-blinds'
        },
        'CUSTOM VERTICAL BLINDS': {
            'mobileimg' : '/d4f23f5daedd4f50a4763038f492c1b6.jpg',
            'url': '/our-range/curtains-blinds/custom-made-blinds/custom-made-vertical-blinds'
        },
        'SIT STAND DESKS': {
            'mobileimg' : '/b770e65749844d85aaf628cedb2888f2.jpg',
            'url': '/our-range/office-furniture/desks-tables/sit-stand-desks'
        },
        'CORNER DESKS': {
            'mobileimg' : '/a0b61471b3a74e1abbe216e5350517a8.png',
            'url': '/our-range/office-furniture/desks-tables/corner-desks'
        },
        'BOARD ROOM TABLES': {
            'mobileimg' : '/8e7fb9dcb6ed4ac584d021700b97d8f8.png',
            'url': '/our-range/office-furniture/desks-tables/board-room-tables'
        },
        'EXECUTIVE DESKS': {
            'mobileimg' : '/c48f406e248349418e7a1b1921a7b720.png',
            'url': '/our-range/office-furniture/desks-tables/executive-desks'
        },
        'Leather Office Chairs': {
            'mobileimg' : '/a7e9f0bb10f6469f8c4410f4431ba50f.jpg',
            'url': '/our-range/office-furniture/office-chairs/leather-office-chairs'
        },
        'BOOK CASES': {
            'mobileimg' : '/7dfd1ea197264a0b97320b21e19ac8ea.png',
            'url': '/our-range/office-furniture/office-storage/book-cases'
        },
        'OFFICE DRAWERS & MOBILE PEDESTALS': {
            'mobileimg' : '/eca4a25f0ece420687e8850d6ea890e3.png',
            'url': '/our-range/office-furniture/office-storage/office-drawers-and-mobile-pedestals'
        },
        'STATIONERY CUPBOARDS & TAMBOURS': {
            'mobileimg' : '/5657adf3b7d14c96a17d12d59a0291a7.png',
            'url': '/our-range/office-furniture/office-storage/stationery-cupboards-and-tambours'
        },
        'ANTI FATIGUE & CHAIR MATS': {
            'mobileimg' : '/5794018c1b554bf78ec7fcbbd283f65f.jpg',
            'url': '/our-range/office-furniture/office-accessories/anti-fatigue-and-chair-mats'
        },
        'ARTIFICIAL OFFICE PLANTS': {
            'mobileimg' : '/e6aecdbbfa1b4a029e114ed649d8e356.jpg',
            'url': '/our-range/office-furniture/office-accessories/office-plants'
        },
        'OFFICE BINS': {
            'mobileimg' : '/ec7e83fff60b4889aef66608f55a052c.jpg',
            'url': '/our-range/office-furniture/office-accessories/office-bins'
        },
        'SOFT FURNISHINGS': {
            'mobileimg' : '/f6dc93ab53c3405c884a115c60ff66cd.png',
            'url': '/our-range/office-furniture/office-accessories/soft-furnishings'
        },
        'DESK LAMPS': {
            'mobileimg' : '/344cbf5164fc4b84bcd06b9c75bbb0bb.jpg',
            'url': '/our-range/office-furniture/office-power-and-lighting/desk-lamps'
        },
        'POWER BOARDS': {
            'mobileimg' : '/2418d4efd3c6499fa0b54353cfe8ebc6.jpg',
            'url': '/our-range/office-furniture/office-power-and-lighting/power-boards'
        },
        'EXTENSION CORDS': {
            'mobileimg' : '/3ab12316f1b341e39353ccfac02537d5.jpg',
            'url': '/our-range/office-furniture/office-power-and-lighting/extension-cords'
        },
        'INTERIOR': {
            'mobileimg' : '/d8a6c55d345a443d89983c46b1213408.jpg',
            'url': '/our-range/paint-decorating/paint/interior'
        },
        'EXTERIOR': {
            'mobileimg' : '/4c52aedb496d4abc8bf01d6a19d8ff9b.jpg',
            'url': '/our-range/paint-decorating/paint/exterior'
        },
        'WOOD FINISHES': {
            'mobileimg' : '/f958448d226542fba87ebb0349c818e5.jpg',
            'url': '/our-range/paint-decorating/paint/wood-finishes'
        },
        'OTHER PAINTS': {
            'mobileimg' : '/a3764bb016fa4f07aea1a962c697ed11.jpg',
            'url': '/our-range/paint-decorating/paint/other-paints'
        },
        'PAINT APPLICATORS': {
            'mobileimg' : '/587d41f804a14ec68d6ffeeb7ad3642c.jpg',
            'url': '/our-range/paint-decorating/paint-accessories/paint-applicators-trays-buckets'
        },
        'POWER PAINTING': {
            'mobileimg' : '/58247a4717ae441b844e9153976f253e.jpg',
            'url': '/our-range/paint-decorating/paint-accessories/power-painting'
        },
        'PAINT PREPARATION': {
            'mobileimg' : '/f8a07059e19f485687224f5f1d2717ff.jpg',
            'url': '/our-range/paint-decorating/paint-accessories/preparation'
        },
        'PAINT PROTECTION': {
            'mobileimg' : '/f294943e98f34dc7bdceaecf3593f331.jpg',
            'url': '/our-range/paint-decorating/paint-accessories/protection'
        },
        'TAPE': {
            'mobileimg' : '/07da911712a24d0cad83db91ff4e1f9f.jpg',
            'url': '/our-range/paint-decorating/paint-accessories/tape'
        },
        'CRAFT': {
            'mobileimg' : '/ab5c261f6ca74e17a34260a43c63b448.jpg',
            'url': '/our-range/paint-decorating/paint-accessories/craft'
        },
        'TILES': {
            'mobileimg' : '/cb998d189d61424b949a578a20c05258.jpg',
            'url': '/our-range/paint-decorating/flooring/tiles'
        },
        'TIMBER FLOORS': {
            'mobileimg' : '/da351eaf5da84ccaa0b7a0be5dbddb9d.jpg',
            'url': '/our-range/paint-decorating/flooring/timber-floors'
        },
        'VINYL FLOORING': {
            'mobileimg' : '/cff9ba92e3524571b5ad418fefc46bde.jpg',
            'url': '/our-range/paint-decorating/flooring/vinyl'
        },
        'CARPET': {
            'mobileimg' : '/453e7dd82bec4315b24ab3c8036994b6.jpg',
            'url': '/our-range/paint-decorating/flooring/carpet'
        },
        'FLOORING ACCESSORIES': {
            'mobileimg' : '/c4b238babd224626a6d5c49a217571b1.jpg',
            'url': '/our-range/paint-decorating/flooring/accessories-adhesives'
        },
        'RUGS': {
            'mobileimg' : '/25331648979e43ac8c0793267786d2a8.png',
            'url': '/our-range/paint-decorating/flooring/rugs'
        },
        'MATS': {
            'mobileimg' : '/939959d7d9644211bfbf13567865d084.jpg',
            'url': '/our-range/paint-decorating/flooring/mats'
        },
        'TEXTURED WALLPAPER': {
            'mobileimg' : '/1558c6001d0d40da8a03747e81546a70.jpg',
            'url': '/our-range/paint-decorating/wallpaper/textured-wallpaper'
        },
        'WALLPAPER ACCESSORIES': {
            'mobileimg' : '/4204831a420e48b4a9f0f0e0b166cff8.jpg',
            'url': '/our-range/paint-decorating/wallpaper/wallpaper-accessories'
        },
        'BRUSHWARE & MOPS': {
            'mobileimg' : '/f7c57bad6daa4adc84108030a9ce26b2.jpg',
            'url': '/our-range/storage-cleaning/cleaning/brushware-mops'
        },
        'BUCKETS, BASINS & PAILS': {
            'mobileimg' : '/6af41924361a415ea6ad1ee382bb8173.jpg',
            'url': '/our-range/storage-cleaning/cleaning/buckets-basins-pails'
        },
        'BINS': {
            'mobileimg' : '/847c596ce0f34b7ebf307ed869d9bf33.jpg',
            'url': '/our-range/storage-cleaning/cleaning/bins'
        },
        'VACUUMS, STEAM CLEANERS & MOPS': {
            'mobileimg' : '/b19067a5058546cfa3dc0a3532a19210.jpg',
            'url': '/our-range/storage-cleaning/cleaning/vacuum-steam-cleaners'
        },
        'CLEANING CHEMICALS': {
            'mobileimg' : '/284e40e359bd473fa9732d636ffa35be.jpg',
            'url': '/our-range/storage-cleaning/cleaning/chemicals'
        },
        'CLEANING ACCESSORIES': {
            'mobileimg' : '/d1093ecdd7964df686334eea5bfab520.jpg',
            'url': '/our-range/storage-cleaning/cleaning/accessories'
        },
        'COMMERCIAL CLEANING': {
            'mobileimg' : '/6e1cdaab9bb847ddb144cab74037999b.jpg',
            'url': '/our-range/storage-cleaning/cleaning/commercial-cleaning'
        },
        'MODULAR': {
            'mobileimg' : '/5092bda6db21467981f60e3afb62611f.png',
            'url': '/our-range/storage-cleaning/laundry/modular'
        },
        'LAUNDRY EQUIPMENT': {
            'mobileimg' : '/521b8a59ad914a4eae6232f688eb1e66.jpg',
            'url': '/our-range/storage-cleaning/laundry/equipment'
        },
        'CLOTHESLINES': {
            'mobileimg' : '/e384f2ea7f5d4616b1a77777e9a385fd.jpg',
            'url': '/our-range/storage-cleaning/laundry/clotheslines'
        },
        'WARDROBE STORAGE': {
            'mobileimg' : '/de32dde16afb4c1dbc626945f789f32c.png',
            'url': '/our-range/storage-cleaning/storage/wardrobe'
        },
        'GARAGE STORAGE': {
            'mobileimg' : '/0274804b0ced41aa9dbaccc1ea45abf7.png',
            'url': '/our-range/storage-cleaning/storage/garage'
        },
        'STORAGE BOXES, CONTAINERS & FLEXI TUBS': {
            'mobileimg' : '/8870bcf6165b480883974270202ad696.jpg',
            'url': '/our-range/storage-cleaning/storage/containers'
        },
        'DECORATIVE STORAGE': {
            'mobileimg' : '/fd48b1416fe548a5b45c8f99fdc90aa2.jpg',
            'url': '/our-range/storage-cleaning/storage/storage-boxes-and-baskets'
        },
        'SHELVING': {
            'mobileimg' : '/63088910da854d8088f95cfcc823aca9.jpg',
            'url': '/our-range/storage-cleaning/storage/shelving'
        },
        'PACKING MATERIALS & SUPPLIES': {
            'mobileimg' : '/04bd786b393441629387adcfc4011a75.jpg',
            'url': '/our-range/storage-cleaning/storage/moving-packing'
        },
        'BATTERIES': {
            'mobileimg' : '/22ce3528ff8648ceabf3c90d8e4b2781.jpg',
            'url': '/our-range/lighting-electrical/electrical/batteries'
        },
        'EXHAUST FANS': {
            'mobileimg' : '/72bbd524ee38489d8e45bda47dc41644.jpg',
            'url': '/our-range/lighting-electrical/electrical/exhaust-fans'
        },
        'EXTENSION LEADS': {
            'mobileimg' : '/4ee345d6ab8a4c97a890ac0f47523df0.jpg',
            'url': '/our-range/lighting-electrical/electrical/extension-leads'
        },
        'POWERBOARDS': {
            'mobileimg' : '/bdd564786bc44a25960a14080e822ced.jpg',
            'url': '/our-range/lighting-electrical/electrical/powerboards'
        },
        'ADAPTORS & TIMERS': {
            'mobileimg' : '/821caa511c524bddbffd8c725e690a68.jpg',
            'url': '/our-range/lighting-electrical/electrical/adaptors-timers'
        },
        'ELECTRICAL TRADE TOOLS & TESTERS': {
            'mobileimg' : '/5f389248db9c42ec9d8279dda03e3187.png',
            'url': '/our-range/lighting-electrical/electrical/electrical-trade-tools-testers'
        },
        'POWERPOINTS, LIGHT SWITCHES & ACCESSORIES': {
            'mobileimg' : '/e9b47cfcb8704e08a340902d519a9bbc.jpg',
            'url': '/our-range/lighting-electrical/electrical/powerpoints-light-switches-accessories'
        },
        'CABLE & CONDUIT': {
            'mobileimg' : '/24e9e7eb7be3413c976e04271cc1a3f8.jpg',
            'url': '/our-range/lighting-electrical/electrical/cable-conduit'
        },
        'LANTERNS, SPOTLIGHTS & TORCHES': {
            'mobileimg' : '/3cd572df2d0043408aff80c7f1abe8b4.jpg',
            'url': '/our-range/lighting-electrical/electrical/lanterns-spotlights-torches'
        },
        'SOLAR POWER PRODUCTS': {
            'mobileimg' : '/1d696046b58f4a4d93b790b0d8b2d0d4.png',
            'url': '/our-range/lighting-electrical/electrical/solar-power'
        },
        'INTERIOR LIGHTING': {
            'mobileimg' : '/5cc7624e43e345a191f167e068d4f9cf.jpg',
            'url': '/our-range/lighting-electrical/lighting/interior'
        },
        'LAMPS': {
            'mobileimg' : '/82397d15de6e490da4082bd9428b13be.jpg',
            'url': '/our-range/lighting-electrical/lighting/lamps'
        },
        'OUTDOOR LIGHTING': {
            'mobileimg' : '/f84405afda4c43a881feef2fb19da392.jpg',
            'url': '/our-range/lighting-electrical/lighting/outdoor'
        },
        'FESTIVE LIGHTS': {
            'mobileimg' : '/ce2c3d586ebe4cbc890edc265407bf03.jpg',
            'url': '/our-range/lighting-electrical/lighting/festive'
        },
        'PARTY LIGHTING': {
            'mobileimg' : '/3d999e2d3331441e9d60be944056ed1a.jpg',
            'url': '/our-range/lighting-electrical/lighting/party'
        },
        'WORK & SAFETY LIGHTING': {
            'mobileimg' : '/aedac22a852e40f9b780a42dfafec4b2.jpg',
            'url': '/our-range/lighting-electrical/lighting/work-safety'
        },
        'SOLAR LIGHTING': {
            'mobileimg' : '/7c6aff3dcf11462a987df65200a7d39e.jpg',
            'url': '/our-range/lighting-electrical/lighting/solar'
        },
        'GLOBES & TUBES': {
            'mobileimg' : '/b6ff31515cf14c57abf605f591ece04d.jpg',
            'url': '/our-range/lighting-electrical/lighting/globes-tubes'
        },
        'HOUSEHOLD HEATERS': {
            'mobileimg' : '/e34ccb3fdcb34d88a43fa905727edd00.png',
            'url': '/our-range/lighting-electrical/heaters/household'
        },
        'INDUSTRIAL HEATERS': {
            'mobileimg' : '/7491c5e1eddd4f189d734b8bc6fa3964.jpg',
            'url': '/our-range/lighting-electrical/heaters/industrial'
        },
        'FANS': {
            'mobileimg' : '/b08f3dc938ab415bafc0583be1460b07.jpg',
            'url': '/our-range/lighting-electrical/cooling/fans'
        },
        'AIR CONDITIONERS': {
            'mobileimg' : '/7b42a82508234aaaa7951c0ae7557bed.png',
            'url': '/our-range/lighting-electrical/cooling/air-conditioners'
        },
        'CEILING FANS': {
            'mobileimg' : '/0e7cf4de9fb54bb28ef0846982ee3a17.jpg',
            'url': '/our-range/lighting-electrical/cooling/ceiling-fans'
        },
        'COOLING ACCESSORIES': {
            'mobileimg' : '/3d726b6475164df78bf6c070a3a8931e.jpg',
            'url': '/our-range/lighting-electrical/cooling/cooling%20accessories'
        },
        'DEHUMIDIFIERS': {
            'mobileimg' : '/4f13501bc79b40aca3e711e063dae6df.jpg',
            'url': '/our-range/lighting-electrical/cooling/dehumidifiers'
        },
        'AMAZON ECHO PRODUCTS': {
            'mobileimg' : '/fc6e08c59c414cfa96704fab26be7b01.png',
            'url': '/our-range/smart-home/smart-home-assistants/amazon-products'
        },
        'GOOGLE HOME & HUB PRODUCTS': {
            'mobileimg' : '/d384317506a34e4e9b06dfa44dc63679.jpg',
            'url': '/our-range/smart-home/smart-home-assistants/google-home-hub-products'
        },
        'SMART DOOR LOCKS': {
            'mobileimg' : '/54d12c08f2e0484daf853a3c3ab762ae.jpg',
            'url': '/our-range/smart-home/smart-home-security/smart-door-locks'
        },
        'SMART DOORBELLS & VIDEO INTERCOM SYSTEMS': {
            'mobileimg' : '/547669d6b51f4057a3788706d9761c78.jpg',
            'url': '/our-range/smart-home/smart-home-security/smart-doorbells-video-intercom-systems'
        },
        'SMART SECURITY SYSTEMS': {
            'mobileimg' : '/385dd2c171d94a5b9cb3484d1f1cd191.jpg',
            'url': '/our-range/smart-home/smart-home-security/smart-security-systems'
        },
        'SMART SECURITY CAMERAS': {
            'mobileimg' : '/1cedff1ca4bb42208d64ebca4fae1435.jpg',
            'url': '/our-range/smart-home/smart-home-security/smart-security-cameras'
        },
        'SMART PADLOCKS': {
            'mobileimg' : '/d16be640ad26452290abdcb928d14126.jpg',
            'url': '/our-range/smart-home/smart-home-security/smart-padlocks'
        },
        'SMART LIGHTS & SMART LIGHT BULBS': {
            'mobileimg' : '/01ebe2da4a23420a9143082c9a46187e.jpg',
            'url': '/our-range/smart-home/smart-lighting-power/smart-light-bulbs'
        },
        'SMART GARDEN LIGHTS & SMART GARDEN TOOLS': {
            'mobileimg' : '/c95560cc0de04f6abf22b69ad41e2a30.png',
            'url': '/our-range/smart-home/smart-lighting-power/smart-garden-lights-tools'
        },
        'SMART LIGHT SWITCHES & SMART SENSORS': {
            'mobileimg' : '/0c5d0ee825bc497592e9278970271930.png',
            'url': '/our-range/smart-home/smart-lighting-power/smart-light-switches-sensors'
        },
        'SMART PLUGS & SMART HOME ACCESSORIES': {
            'mobileimg' : '/815faf9368dd4071a2476e7e6bbf346c.jpg',
            'url': '/our-range/smart-home/smart-lighting-power/smart-plugs-home-accessories'
        },
        'MESH ROUTERS': {
            'mobileimg' : '/c924c18cd8dd464a887a1efd4e0fd583.jpg',
            'url': '/our-range/smart-home/routers-modems/mesh-routers'
        },
        'RANGE EXTENDERS & POWERLINE ADAPTERS': {
            'mobileimg' : '/339e97a132f4446f9b5639be9219c970.jpg',
            'url': '/our-range/smart-home/routers-modems/range-extenders-powerline'
        },
        'ROUTER MODEMS': {
            'mobileimg' : '/20641dd47c404e3284e73c3b13cc731b.jpg',
            'url': '/our-range/smart-home/routers-modems/routers-modems'
        },
        'CARPET CLEANERS': {
            'mobileimg' : '/66687d284f9244c3aa739e274d580a0d.jpg',
            'url': '/our-range/hire-shop/carpet-cleaning-equipment/carpet-cleaners'
        },
        'CARPET BLOWERS': {
            'mobileimg' : '/98210e7296c1432eb029e171ac3c3a74.jpg',
            'url': '/our-range/hire-shop/carpet-cleaning-equipment/carpet-blowers'
        },
        'CARPET CLEANING CONSUMABLES': {
            'mobileimg' : '/deffcece89b04131908a7d66ce2d09ed.jpg',
            'url': '/our-range/hire-shop/carpet-cleaning-equipment/carpet-cleaning-consumables'
        },
        'FLOOR SANDERS': {
            'mobileimg' : '/ba20a809915848028d03208b5441172c.jpg',
            'url': '/our-range/hire-shop/floor-sanding-equipment/floor-sanders'
        },
        'FLOOR SANDING CONSUMABLES': {
            'mobileimg' : '/0117e0d6ba3042b1afd4910968d4089d.jpg',
            'url': '/our-range/hire-shop/floor-sanding-equipment/floor-sanding-consumables'
        },
        'BRICK SAWS': {
            'mobileimg' : '/17a01206aec147bc8ad4e6665a52f23e.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/brick-saws'
        },
        'CIRCULAR SAWS': {
            'mobileimg' : '/bd555ba23e664833bf3bcdbe20e9fcac.png',
            'url': '/our-range/hire-shop/general-hire-equipment/circular-saws'
        },
        'COMPACTORS': {
            'mobileimg' : '/ad5ebcc00ba644fdb9a1331a85a8a543.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/compactors'
        },
        'SKIP HIRE': {
            'mobileimg' : '/71cc5b9ae1a548b89020d265def14146.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/skip-hire'
        },
        'DIGGERS': {
            'mobileimg' : '/40eeaf7a7c604182add4d9ede1972435.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/diggers'
        },
        'HAND TROLLEYS': {
            'mobileimg' : '/a01cb09bd91645079ed22a4b1195cea4.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/hand-trolleys'
        },
        'LAWN ROLLERS': {
            'mobileimg' : '/6d654e2dca8d4ea3949dfdd749b91af5.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/lawn-rollers'
        },
        'NAIL GUNS': {
            'mobileimg' : '/52bda385f7ff4ee284dfc8ebc3072579.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/nail-guns'
        },
        'PANEL LIFTS': {
            'mobileimg' : '/bf0e1efbdba94498a2589941e3be4081.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/panel-lifts'
        },
        'TILE CUTTERS': {
            'mobileimg' : '/f120e6c0421e427686f2cf7f8de9d2b0.jpg',
            'url': '/our-range/hire-shop/general-hire-equipment/tile-cutters'
        },
        'TRAILERS': {
            'mobileimg' : '/4a9cf05b5f344831ba0c6d033952e9d2.jpg',
            'url': '/our-range/hire-shop/trailer-and-vehicle-hire/trailers'
        },
        'VEHICLES': {
            'mobileimg' : '/3fe53c7e7a674e008990f791f3f904e7.jpg',
            'url': '/our-range/hire-shop/trailer-and-vehicle-hire/vehicles'
        }
    };

    function isMobile() {
        return (Bunnings.trackingInfo.Device === 'responsive');
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
            var parts = categoryName.tertiarycategory.split(' ');
            var newDesc = '';
            for(var i=0; i<parts.length; i += 1){
                if(parts[i] === 'BBQ'){
                  newDesc += parts[i] + ' ';
                }else if(parts[i] === 'BBQS'){
                  parts[i] = 'BBQs';
                  newDesc += parts[i] + ' ';
                }else {
                  newDesc += parts[i].charAt(0).toUpperCase() + parts[i].substr(1).toLowerCase() + ' ';
                }
            }
            paragraph.innerHTML = '<span>' + newDesc + '</span>';
            if(newDesc.length < 16){
                paragraph.classList.add('small_desc_pad');
            }else if(newDesc.length > 26 && isMobile()){
                paragraph.classList.add('small_fontsize');
                if(newDesc.length > 34){
                    paragraph.classList.add('xt_small_fontsize');
                }
            }
            link.appendChild(paragraph);
            
            product.appendChild(link);
            divImages.appendChild(product);
        });

        return div;
    }

    function appendHtml(html, device) {
        if (device === 'mobile') {
            var mobileDiv = document.querySelector('#headerMainMenu');
            mobileDiv.parentNode.insertBefore(html, mobileDiv.nextSibling);
        } else {
            var desktopDiv = document.querySelector('#RefreshHeader .header-navigation-level--lg_content-title');
            desktopDiv.parentNode.insertBefore(html, desktopDiv.nextSibling);
        } 
    }

    function observeNav() {
        var targetNode = document.querySelector('nav.header-navigation--lg');
        var config = { characterData: false, attributes: true, childList: false, subtree: false };
        var callback = function() {
            if (document.querySelector('nav.header-navigation--lg').classList.contains('is-open') && 
                document.querySelector('#headerMainMenu .header_primary-nav-link_item').classList.contains('is-active')) {
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

    if (isMobile()) {
        utils
            .waitForElement('#headerMainMenu')
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