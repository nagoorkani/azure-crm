'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp', ['datatables', 'ngCart'])
    .controller('SalesController', function($scope, $filter, $state, $stateParams, DTOptionsBuilder, DTColumnBuilder, ngCart) {
        var vm = this;
        var orderId = $stateParams.id || "";

        var itemsLists = [{
            "id": 1,
            "name": "Sertraline",
            "qty": 15,
            "cost": "$5.62",
            "categoryID": "487a3b17-eaa1-46d8-bb30-decdeb1728b9",
            "image": "http://dummyimage.com/125x154.gif/5fa2dd/ffffff"
        }, {
            "id": 2,
            "name": "Donepezil Hydrochloride",
            "qty": 1,
            "cost": "$4.53",
            "categoryID": "75fca9c3-d6bf-4179-9099-02fdcf320c74",
            "image": "http://dummyimage.com/165x192.png/ff4444/ffffff"
        }, {
            "id": 3,
            "name": "Head and Shoulders",
            "qty": 63,
            "cost": "$6.48",
            "categoryID": "3172e7a3-7aa8-4d1b-abb1-245a6b7a06e9",
            "image": "http://dummyimage.com/126x121.png/ff4444/ffffff"
        }, {
            "id": 4,
            "name": "Metoclopramide",
            "qty": 36,
            "cost": "$7.12",
            "categoryID": "4db1bee1-14e8-4a17-9fca-46f764f370dd",
            "image": "http://dummyimage.com/208x111.jpg/dddddd/000000"
        }, {
            "id": 5,
            "name": "Dial Clear and Refresh Antibacterial Hand Soap",
            "qty": 88,
            "cost": "$3.08",
            "categoryID": "23e6410f-03ae-4eef-b288-63c81615a8a6",
            "image": "http://dummyimage.com/204x107.png/cc0000/ffffff"
        }, {
            "id": 6,
            "name": "Nitrogen",
            "qty": 68,
            "cost": "$6.37",
            "categoryID": "9e2e7b68-c78f-4797-b48c-4c8089f2227c",
            "image": "http://dummyimage.com/129x161.png/cc0000/ffffff"
        }, {
            "id": 7,
            "name": "Clove",
            "qty": 22,
            "cost": "$3.81",
            "categoryID": "ef1a7d68-fe62-47dd-a2d0-aed85175fe01",
            "image": "http://dummyimage.com/154x133.png/ff4444/ffffff"
        }, {
            "id": 8,
            "name": "METOPROLOL SUCCINATE",
            "qty": 51,
            "cost": "$6.26",
            "categoryID": "df080a4f-8d62-4b2b-9d89-5dd2b0ffd65d",
            "image": "http://dummyimage.com/150x222.jpg/cc0000/ffffff"
        }, {
            "id": 9,
            "name": "Complexion Corrector SPF20",
            "qty": 4,
            "cost": "$9.07",
            "categoryID": "0f2f87a7-a6c9-4c14-b02f-8ea872bc238f",
            "image": "http://dummyimage.com/123x234.png/ff4444/ffffff"
        }, {
            "id": 10,
            "name": "Olay Total Effects Tone Correcting",
            "qty": 89,
            "cost": "$9.54",
            "categoryID": "cfcd859b-4788-4461-beb3-8c1087fedbf4",
            "image": "http://dummyimage.com/130x121.png/5fa2dd/ffffff"
        }, {
            "id": 11,
            "name": "Lansoprazole",
            "qty": 57,
            "cost": "$5.67",
            "categoryID": "0b042d73-5484-45e6-b2c9-bab9d2645062",
            "image": "http://dummyimage.com/184x186.jpg/cc0000/ffffff"
        }, {
            "id": 12,
            "name": "ibuprofen",
            "qty": 8,
            "cost": "$2.23",
            "categoryID": "6941afe9-78cc-4d6f-9a57-0a0f8237aeb4",
            "image": "http://dummyimage.com/100x147.jpg/ff4444/ffffff"
        }, {
            "id": 13,
            "name": "NARS Pure Radiant Tinted Moisturizer",
            "qty": 64,
            "cost": "$2.04",
            "categoryID": "7751c12b-6fe8-445f-a7cb-1ed7936d1484",
            "image": "http://dummyimage.com/183x152.gif/dddddd/000000"
        }, {
            "id": 14,
            "name": "BencoCaine Topical Anesthetic",
            "qty": 22,
            "cost": "$5.11",
            "categoryID": "439100d8-a99d-4a4c-a2d4-e175ad77d6ca",
            "image": "http://dummyimage.com/168x108.gif/cc0000/ffffff"
        }, {
            "id": 15,
            "name": "Acetaminophen And Codeine Phosphate",
            "qty": 50,
            "cost": "$0.33",
            "categoryID": "023c3fc9-70d7-4b45-bfb0-de1d9550b784",
            "image": "http://dummyimage.com/246x133.png/cc0000/ffffff"
        }, {
            "id": 16,
            "name": "dg health milk of magnesia",
            "qty": 81,
            "cost": "$8.00",
            "categoryID": "9d2569da-220c-4912-9ea4-f4da341985e0",
            "image": "http://dummyimage.com/209x144.jpg/5fa2dd/ffffff"
        }, {
            "id": 17,
            "name": "Alprazolam",
            "qty": 47,
            "cost": "$4.68",
            "categoryID": "0706bcb0-85fe-442e-b616-42bc5bf8da1b",
            "image": "http://dummyimage.com/144x120.gif/dddddd/000000"
        }, {
            "id": 18,
            "name": "Gas Relief",
            "qty": 46,
            "cost": "$4.58",
            "categoryID": "d3362450-dcd1-4632-aba1-b2dae6e21ada",
            "image": "http://dummyimage.com/226x213.jpg/ff4444/ffffff"
        }, {
            "id": 19,
            "name": "Nevirapine",
            "qty": 85,
            "cost": "$9.55",
            "categoryID": "c5d811a3-b730-48ce-a7fe-21bed641af50",
            "image": "http://dummyimage.com/167x189.gif/cc0000/ffffff"
        }, {
            "id": 20,
            "name": "Betamethasone Dipropionate",
            "qty": 18,
            "cost": "$2.27",
            "categoryID": "eb00ebea-7cb6-47f6-bba5-6a9f9e0855ce",
            "image": "http://dummyimage.com/168x152.jpg/5fa2dd/ffffff"
        }, {
            "id": 21,
            "name": "VANATAB DX",
            "qty": 75,
            "cost": "$3.82",
            "categoryID": "b190e055-de96-4b76-b984-c2efdcd7a2a0",
            "image": "http://dummyimage.com/232x182.jpg/cc0000/ffffff"
        }, {
            "id": 22,
            "name": "Dextrose",
            "qty": 71,
            "cost": "$6.70",
            "categoryID": "ceb99d99-77ec-4c15-84fa-65f6277501e4",
            "image": "http://dummyimage.com/173x147.gif/5fa2dd/ffffff"
        }, {
            "id": 23,
            "name": "Fentanyl Citrate, Bupivacaine HCl",
            "qty": 79,
            "cost": "$5.54",
            "categoryID": "dd6f651b-5c3a-4073-b8c6-c7c30023eab7",
            "image": "http://dummyimage.com/102x227.jpg/dddddd/000000"
        }, {
            "id": 24,
            "name": "BF-PARADAC",
            "qty": 72,
            "cost": "$0.20",
            "categoryID": "14ae866d-5420-402e-9f29-ee6376535fb1",
            "image": "http://dummyimage.com/202x229.jpg/cc0000/ffffff"
        }, {
            "id": 25,
            "name": "bleve",
            "qty": 36,
            "cost": "$7.63",
            "categoryID": "45fa3f2c-5a19-4e1d-8d31-e8db31ba141c",
            "image": "http://dummyimage.com/128x172.png/cc0000/ffffff"
        }, {
            "id": 26,
            "name": "Azathioprine",
            "qty": 44,
            "cost": "$5.56",
            "categoryID": "2121c928-99b8-4f46-a833-3a78f48aa39b",
            "image": "http://dummyimage.com/207x196.gif/5fa2dd/ffffff"
        }, {
            "id": 27,
            "name": "DR. BABOR DERMA Cellular Detoxifying Vitamin SPF 15",
            "qty": 48,
            "cost": "$6.91",
            "categoryID": "3dd1324c-44be-4dd8-8b0d-99547746000d",
            "image": "http://dummyimage.com/153x191.png/cc0000/ffffff"
        }, {
            "id": 28,
            "name": "Sodium Chloride",
            "qty": 86,
            "cost": "$9.74",
            "categoryID": "d4d71468-46c9-4407-8e1c-c33a245e46e4",
            "image": "http://dummyimage.com/107x142.png/5fa2dd/ffffff"
        }, {
            "id": 29,
            "name": "Cyclophosphamide",
            "qty": 65,
            "cost": "$1.21",
            "categoryID": "681b1166-bcc6-4bb0-a7df-4388c9ef2aeb",
            "image": "http://dummyimage.com/185x212.png/ff4444/ffffff"
        }, {
            "id": 30,
            "name": "ibuprofen",
            "qty": 75,
            "cost": "$3.18",
            "categoryID": "893393ac-891b-47b5-9e17-6878efb75123",
            "image": "http://dummyimage.com/145x130.gif/dddddd/000000"
        }, {
            "id": 31,
            "name": "Antibacterial Wipes",
            "qty": 53,
            "cost": "$7.61",
            "categoryID": "254a378b-b849-46f2-a1cf-d9f24304a561",
            "image": "http://dummyimage.com/175x144.jpg/ff4444/ffffff"
        }, {
            "id": 32,
            "name": "Venlafaxine hydrochloride",
            "qty": 97,
            "cost": "$2.47",
            "categoryID": "521df8e8-5c7e-4505-b27a-9a0915d69e25",
            "image": "http://dummyimage.com/151x231.png/cc0000/ffffff"
        }, {
            "id": 33,
            "name": "DG HEALTH EXTRA STRENGTH MEDICATED",
            "qty": 16,
            "cost": "$9.94",
            "categoryID": "b38b33f1-1bf9-4369-8264-107818ce9e53",
            "image": "http://dummyimage.com/230x226.jpg/dddddd/000000"
        }, {
            "id": 34,
            "name": "Night Time Sleep Aid",
            "qty": 62,
            "cost": "$5.31",
            "categoryID": "89b34863-7726-4439-b6b8-6360344a4891",
            "image": "http://dummyimage.com/155x139.jpg/ff4444/ffffff"
        }, {
            "id": 35,
            "name": "Furosemide",
            "qty": 85,
            "cost": "$5.35",
            "categoryID": "6f30d18f-9967-46b8-8030-43b1fca4adda",
            "image": "http://dummyimage.com/159x157.gif/dddddd/000000"
        }, {
            "id": 36,
            "name": "Sinus and Allergy",
            "qty": 89,
            "cost": "$3.40",
            "categoryID": "c059f820-954a-4f91-ad79-c00ad94e81f8",
            "image": "http://dummyimage.com/212x194.gif/5fa2dd/ffffff"
        }, {
            "id": 37,
            "name": "ZEA MAYS POLLEN",
            "qty": 26,
            "cost": "$7.14",
            "categoryID": "b801ea65-57b1-4f2d-a8b7-ee29b0c2024f",
            "image": "http://dummyimage.com/129x170.gif/5fa2dd/ffffff"
        }, {
            "id": 38,
            "name": "Yes to Carrots",
            "qty": 72,
            "cost": "$3.70",
            "categoryID": "cab423a4-606a-49ae-b734-afa2b95c81b2",
            "image": "http://dummyimage.com/145x131.jpg/cc0000/ffffff"
        }, {
            "id": 39,
            "name": "XtraCare Wet Wipes",
            "qty": 31,
            "cost": "$6.55",
            "categoryID": "41cdc61d-b5c9-456f-9913-46d340dd0253",
            "image": "http://dummyimage.com/125x180.jpg/ff4444/ffffff"
        }, {
            "id": 40,
            "name": "Clonidine Hydrochloride",
            "qty": 3,
            "cost": "$0.59",
            "categoryID": "6163c038-4fea-46fc-99ec-4d4d621f907f",
            "image": "http://dummyimage.com/141x102.gif/5fa2dd/ffffff"
        }, {
            "id": 41,
            "name": "ED A-HIST DM",
            "qty": 75,
            "cost": "$8.34",
            "categoryID": "a1cfcabb-bb16-45ad-9b4b-7be9c5ced4f0",
            "image": "http://dummyimage.com/222x249.png/5fa2dd/ffffff"
        }, {
            "id": 42,
            "name": "Enlon",
            "qty": 66,
            "cost": "$6.54",
            "categoryID": "99d4f7f3-5d03-4be1-bd5d-ccb0c6253fbb",
            "image": "http://dummyimage.com/220x214.gif/5fa2dd/ffffff"
        }, {
            "id": 43,
            "name": "Wingscale",
            "qty": 41,
            "cost": "$1.06",
            "categoryID": "b806936c-6e64-48ed-abea-4676d31afa89",
            "image": "http://dummyimage.com/112x163.png/ff4444/ffffff"
        }, {
            "id": 44,
            "name": "WHITE PINE POLLEN",
            "qty": 17,
            "cost": "$5.22",
            "categoryID": "325ced1e-91e9-48c0-b98f-dd82ada15daf",
            "image": "http://dummyimage.com/184x222.jpg/5fa2dd/ffffff"
        }, {
            "id": 45,
            "name": "Selsun Blue Deep Cleansing Micro-Bead Scrub",
            "qty": 68,
            "cost": "$4.09",
            "categoryID": "c4f4dfb8-832c-4569-b56a-9498bca3e94f",
            "image": "http://dummyimage.com/219x225.jpg/cc0000/ffffff"
        }, {
            "id": 46,
            "name": "Cephalexin",
            "qty": 48,
            "cost": "$9.81",
            "categoryID": "82a13bd0-93d1-4cf8-a55a-6b2988130078",
            "image": "http://dummyimage.com/193x128.gif/5fa2dd/ffffff"
        }, {
            "id": 47,
            "name": "Kirkland Signature Lansoprazole Delayed Release",
            "qty": 72,
            "cost": "$3.39",
            "categoryID": "b8f9535c-9019-4dc8-91f8-7613d3c51971",
            "image": "http://dummyimage.com/155x109.gif/dddddd/000000"
        }, {
            "id": 48,
            "name": "Lip Smacker SPF 24 Power Punch",
            "qty": 36,
            "cost": "$6.66",
            "categoryID": "b932fb4a-101f-4487-b3f1-9390dbd8cd1e",
            "image": "http://dummyimage.com/134x174.jpg/cc0000/ffffff"
        }, {
            "id": 49,
            "name": "Leucovorin",
            "qty": 41,
            "cost": "$4.91",
            "categoryID": "500d676e-38ea-4404-86b8-65a6af2f4397",
            "image": "http://dummyimage.com/151x218.jpg/cc0000/ffffff"
        }, {
            "id": 50,
            "name": "Noble Lion Medicated Balm",
            "qty": 13,
            "cost": "$1.36",
            "categoryID": "3603798a-7cc8-46dc-a1ea-ff2d9213aee7",
            "image": "http://dummyimage.com/139x119.gif/cc0000/ffffff"
        }];

        // default view is list
        vm.mode = 1;

        vm.items = [];

        function init() {
            vm.getAllItems();
        }

        vm.getAllItems = function() {
            vm.items = itemsLists;
        };

        init();
    });
