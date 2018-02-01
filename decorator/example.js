﻿
function init() {
  // --- Example with an array of Polylines ---
  var multiCoords1 = [

    // Ida Rio paper
    /*
    [[-22.942269,-43.177305,9],[-22.942433,-43.177097,8],[-22.942566,-43.176926,5.2],[-22.943234,-43.176061,5.8],[-22.943306,-43.175909,6.2],
    [-22.943356,-43.175729,6.9],[-22.943382,-43.175476,8.3],[-22.943374,-43.175325,8.8],[-22.9433,-43.175069,10.4],[-22.943251,-43.174948,11.7],
    [-22.943186,-43.174828,13.1],[-22.943106,-43.174711,14.5],[-22.943041,-43.174635,15.8],[-22.942916,-43.174503,17.1],[-22.942302,-43.173864,28.2],
    [-22.941969,-43.173416,32.4],[-22.941954,-43.173396,37],[-22.940803,-43.171765,30.4],[-22.940681,-43.171648,29.6],[-22.939472,-43.170964,28],
    [-22.939265,-43.170915,29],[-22.938993,-43.170922,28.6],[-22.938849,-43.17095,28.2],[-22.938711,-43.171002,27.8],[-22.938604,-43.171048,27.3],
    [-22.9384,-43.171222,26.1],[-22.938265,-43.171398,24],[-22.937975,-43.17201,15.2],[-22.937865,-43.172232,12.4],[-22.937795,-43.172351,11],
    [-22.937508,-43.172764,8.7],[-22.937259,-43.173124,8.5],[-22.937099,-43.173356,16.3],[-22.937065,-43.173435,16.9],[-22.937066,-43.173557,17.4],
    [-22.937112,-43.173672,17.6],[-22.937179,-43.173785,17.8],[-22.937274,-43.173873,18],[-22.937374,-43.173923,18.1],[-22.938197,-43.173739,17.7],
    [-22.938479,-43.173706,19.7],[-22.938536,-43.17371,20.7],[-22.938664,-43.173758,21.5],[-22.938726,-43.173809,22.4],[-22.939007,-43.174147,25.8],
    [-22.938782,-43.174615,30.3],[-22.938166,-43.174838,35.9],[-22.937825,-43.174962,35.1],[-22.937668,-43.175019,26.5],[-22.936839,-43.175122,22.2],
    [-22.936867,-43.175519,21.3],[-22.93687,-43.175556,19],[-22.936877,-43.17571,19],[-22.936572,-43.175601,19.7],[-22.936011,-43.175393,20.3],
    [-22.935434,-43.17518,19],[-22.934964,-43.175108,18.9],[-22.93455,-43.175572,18.9],[-22.9343,-43.175851,19],[-22.934076,-43.176089,18.6],
    [-22.934022,-43.176146,18.5],[-22.933691,-43.1765,18.3],[-22.933463,-43.176745,18.3],[-22.933222,-43.176999,17.5],[-22.933169,-43.17706,17.2],
    [-22.933015,-43.177213,16.3],[-22.932959,-43.17726,15.9],[-22.932755,-43.177412,15.2],[-22.932626,-43.17749,14.9],[-22.932503,-43.177534,15],
    [-22.932209,-43.177539,15.3],[-22.931495,-43.177586,14.5],[-22.931368,-43.177599,14.4],[-22.931155,-43.177602,14.5],[-22.931027,-43.17772,14.6],
    [-22.930965,-43.177835,14.6],[-22.930977,-43.177921,14.7],[-22.931049,-43.178169,14.8],[-22.931155,-43.178529,14.3],[-22.931198,-43.178683,14.1],
    [-22.931207,-43.178713,13.8],[-22.931261,-43.178905,13.5],[-22.931352,-43.17923,13.8],[-22.931395,-43.179386,14.1],[-22.931424,-43.17947,14.5],
    [-22.931521,-43.17975,15.7],[-22.931609,-43.180007,21.3],[-22.931684,-43.180225,21],[-22.931726,-43.180344,20.8],[-22.931794,-43.180542,20.6],
    [-22.931874,-43.180769,20.5],[-22.931995,-43.181126,21],[-22.932078,-43.181368,21.4],[-22.932145,-43.181563,21.7],[-22.932187,-43.181684,22.2],
    [-22.932217,-43.181772,22.7],[-22.932247,-43.181855,23.1],[-22.932364,-43.182187,24.6],[-22.932497,-43.182586,27.5],[-22.93255,-43.182746,27.5],
    [-22.932717,-43.183245,27.1],[-22.932743,-43.183322,20],[-22.932815,-43.183539,20.4],[-22.932849,-43.183643,20.5],[-22.932951,-43.183883,20.6],
    [-22.933126,-43.184095,20.7],[-22.933136,-43.184217,20.8],[-22.933135,-43.184358,20.8],[-22.933076,-43.184506,20.8],[-22.93296,-43.18463,20.8],
    [-22.931539,-43.185288,21.9],[-22.930901,-43.185707,22.6],[-22.930461,-43.18614,26.6],[-22.928734,-43.187501,98.6],[-22.922964,-43.191903,112.4],
    [-22.920648,-43.193606,43.8],[-22.92045,-43.193757,38.2],[-22.920379,-43.193805,35.6],[-22.92003,-43.19394,26.8],[-22.919973,-43.19393,25],
    [-22.919943,-43.193909,23.2],[-22.919886,-43.193868,14],[-22.919843,-43.19377,14],[-22.919832,-43.193808,14],[-22.91976,-43.193946,14],
    [-22.919673,-43.194016,14],[-22.919602,-43.194056,14],[-22.919262,-43.194167,14.2],[-22.919081,-43.194233,13.8],[-22.918913,-43.194264,13.6],
    [-22.918499,-43.194282,13],[-22.918216,-43.194254,12.7],[-22.91799,-43.194217,12.4],[-22.917157,-43.194125,12.3],[-22.916832,-43.194114,13],
    [-22.916514,-43.19407,13.8],[-22.916224,-43.194073,14.5],[-22.91602,-43.194098,15],[-22.915791,-43.194158,15.7],[-22.915574,-43.194243,15.7],
    [-22.914066,-43.194832,13.5],[-22.911406,-43.195863,12.2],[-22.91089,-43.196028,11.7],[-22.910314,-43.19624,11.2],[-22.908894,-43.19681,9.3],
    [-22.908556,-43.196943,8.5],[-22.906582,-43.197703,7.6],[-22.903504,-43.198873,13.2],[-22.903227,-43.19902,15.7],[-22.902716,-43.199417,22.6],
    [-22.902645,-43.19945,23.8],[-22.901793,-43.199801,33.1],[-22.901515,-43.199991,31.9],[-22.900514,-43.200685,18.3],[-22.899823,-43.201121,12.1],
    [-22.899669,-43.201223,11.4],[-22.89961,-43.201261,11.1],[-22.899563,-43.201281,10.7],[-22.899414,-43.201249,10.4],[-22.899317,-43.201216,10.1],
    [-22.899234,-43.201208,9.9],[-22.89915,-43.201212,9.6],[-22.899052,-43.201259,9.4],[-22.898962,-43.201339,9.3],[-22.898901,-43.20145,9.1],
    [-22.898859,-43.201579,9],[-22.898842,-43.201737,8.7],[-22.898671,-43.201826,8.2],[-22.898316,-43.202002,7.4],[-22.898216,-43.202048,7.3],
    [-22.898036,-43.202147,7],[-22.897211,-43.202551,5.8],[-22.897078,-43.202617,5.8],[-22.897021,-43.202642,5.9],[-22.896524,-43.20289,6.4],
    [-22.89646,-43.202923,6.5],[-22.896522,-43.203056,6.6],[-22.897762,-43.206067,9.1],[-22.898204,-43.207183,9.2],[-22.898341,-43.207349,9.2],
    [-22.899007,-43.207821,8.6],[-22.89905,-43.20785,8.6],[-22.899176,-43.207932,8.5],[-22.899211,-43.207953,8.4],[-22.899433,-43.208092,8.3],
    [-22.899677,-43.208251,8.3],[-22.899902,-43.20839,8.3],[-22.899942,-43.208415,8.4],[-22.900089,-43.208529,8.2],[-22.900166,-43.208599,8.1],
    [-22.900193,-43.208696,8],[-22.90021,-43.209297,7.3],[-22.90018,-43.209441,7.2],[-22.900139,-43.209549,7],[-22.899943,-43.209768,6.6],
    [-22.899835,-43.209844,6.4],[-22.899512,-43.209985,5.9],[-22.899315,-43.210121,5.4],[-22.899137,-43.210267,5.2],[-22.897514,-43.211982,5.6],
    [-22.897334,-43.212144,5.6],[-22.89707,-43.212332,5.6],[-22.896845,-43.212467,5.5],[-22.896271,-43.212767,5.9],[-22.890042,-43.215736,7.1],
    [-22.888952,-43.216273,7],[-22.888267,-43.216584,6.6],[-22.887366,-43.217002,5.6],[-22.887017,-43.217186,5.2],[-22.886683,-43.21728,5],
    [-22.886367,-43.217303,5.3],[-22.886072,-43.21727,5.8],[-22.885793,-43.217195,6.1],[-22.885651,-43.217146,6.2],[-22.885392,-43.217022,6.5],
    [-22.884585,-43.21647,6.9],[-22.876189,-43.208678,5.1],[-22.871084,-43.20394,0.6],[-22.870487,-43.203294,0.2],[-22.870248,-43.203002,0.1],
    [-22.869712,-43.202275,0],[-22.86934,-43.201698,0],[-22.869126,-43.201326,0],[-22.868853,-43.200791,0],[-22.868588,-43.200205,0],
    [-22.868403,-43.199745,0],[-22.868186,-43.199109,0],[-22.868043,-43.198624,0],[-22.867895,-43.197978,0],[-22.867814,-43.197557,0],
    [-22.867739,-43.197049,0],[-22.867678,-43.196527,0],[-22.867642,-43.195966,0],[-22.867625,-43.195423,0],[-22.867631,-43.194904,0],
    [-22.867678,-43.19426,0],[-22.868506,-43.185068,0],[-22.870929,-43.158137,0],[-22.871114,-43.156236,0],[-22.871553,-43.151384,0],
    [-22.87193,-43.14718,0],[-22.872895,-43.136428,0],[-22.872973,-43.13564,0],[-22.873045,-43.134898,0],[-22.873164,-43.13338,0],
    [-22.873192,-43.133074,0],[-22.873365,-43.131224,0],[-22.873609,-43.128542,0],[-22.873915,-43.125125,0],[-22.874048,-43.123673,1.9],
    [-22.874115,-43.123222,2.8],[-22.874265,-43.122492,3.5],[-22.874373,-43.122049,3.3],[-22.874539,-43.121486,3.2],[-22.874681,-43.121075,3.3],
    [-22.874889,-43.120539,3.9],[-22.875175,-43.119906,6.1],[-22.875295,-43.119673,6.8],[-22.875546,-43.119193,8.3],[-22.875765,-43.118835,9.6],
    [-22.875965,-43.118508,11],[-22.876532,-43.117682,11.1],[-22.877018,-43.117034,10.3],[-22.877973,-43.115908,6.4],[-22.878034,-43.115837,5.9],
    [-22.878094,-43.115746,5.8],[-22.878882,-43.114549,5.7],[-22.879021,-43.114376,6.2],[-22.879217,-43.114226,6.4],[-22.879371,-43.114148,6.5],
    [-22.879664,-43.114034,6.8],[-22.880003,-43.113974,7.1],[-22.880453,-43.114031,7.6],[-22.880769,-43.114083,8.1],[-22.881191,-43.1142,7.8],
    [-22.881431,-43.114325,7.4],[-22.881691,-43.11449,6.8],[-22.881951,-43.114712,6.6],[-22.882129,-43.114894,6.5],[-22.882331,-43.115135,6.2],
    [-22.882547,-43.11543,6.1],[-22.88269,-43.115678,6.4],[-22.882906,-43.116096,7.8],[-22.883013,-43.11644,8.1],[-22.883147,-43.116865,8],
    [-22.883251,-43.117156,7.9],[-22.884558,-43.121262,10.1],[-22.884892,-43.122285,11.1],[-22.88517,-43.123099,11.9],[-22.885246,-43.123346,11.8],
    [-22.885721,-43.124831,9.9],[-22.885751,-43.124909,9.8],[-22.88586,-43.125028,9.5],[-22.885959,-43.125084,9.4],[-22.886048,-43.125109,9.3],
    [-22.886155,-43.125101,9.3],[-22.886548,-43.125003,9],[-22.88698,-43.124884,9.1],[-22.887645,-43.124711,8.9],[-22.888638,-43.124477,7.8],
    [-22.889794,-43.124207,6],[-22.890045,-43.124157,6.1],[-22.890577,-43.124021,6.9],[-22.890948,-43.123947,7.2],[-22.891368,-43.123882,7.4],
    [-22.891473,-43.123861,7.4],[-22.891806,-43.123803,7.6],[-22.892129,-43.123757,7.6],[-22.892288,-43.123753,7.6],[-22.89265,-43.123741,7.6],
    [-22.893011,-43.123726,7.7],[-22.893484,-43.123742,7.4],[-22.89371,-43.123759,7],[-22.893822,-43.12377,6.8],[-22.894158,-43.123835,6.2],
    [-22.894491,-43.123903,5.8],[-22.89469,-43.123947,5.6],[-22.894815,-43.123988,5.5],[-22.894906,-43.124047,5.4],[-22.894959,-43.124109,5.3],
    [-22.895048,-43.124213,5],[-22.895384,-43.124809,3.9],[-22.89569,-43.125312,4.3],[-22.896105,-43.126063,4.1],[-22.896203,-43.126339,4.1],
    [-22.8963,-43.127851,3.2],[-22.896348,-43.128134,3.5],[-22.896421,-43.128305,3.7],[-22.896586,-43.128613,4.3],[-22.896727,-43.128878,4.8],
    [-22.897074,-43.129616,5.5],[-22.897208,-43.129805,5.6],[-22.897441,-43.130013,6.2],[-22.897847,-43.130243,6.4],[-22.897941,-43.130282,6.4],
    [-22.89904,-43.130636,6.6],[-22.899151,-43.130686,6.5],[-22.899293,-43.130752,6.4],[-22.899622,-43.130907,6.3],[-22.899842,-43.131017,6.6],
    [-22.89996,-43.131075,6.7],[-22.900181,-43.131194,7],[-22.900727,-43.131689,7.5],[-22.90079,-43.131759,7.5],[-22.900853,-43.131866,7.5],
    [-22.900905,-43.131985,7.5],[-22.901162,-43.13258,6.8],[-22.901288,-43.132873,6.2],[-22.901604,-43.133607,5.7],[-22.902309,-43.135081,6.6],
    [-22.90239,-43.135077,6.5],[-22.902511,-43.135065,6.5],[-22.902669,-43.13499,6.7],[-22.902783,-43.134788,7.1],[-22.90277,-43.134641,7.4],
    [-22.902734,-43.134528,7.6],[-22.902611,-43.134199,8.3],[-22.902417,-43.133767,9.1],[-22.902424,-43.133677,9.3],[-22.902451,-43.13364,9.4],
    [-22.902535,-43.133606,10.1],[-22.902595,-43.133618,10.7],[-22.902644,-43.133654,11.3],[-22.902686,-43.133711,12],[-22.902765,-43.13391,13.1],
    [-22.902882,-43.133987,13.4],[-22.903035,-43.134024,13.7],[-22.903208,-43.134008,14],[-22.903188,-43.133928,14.3],[-22.903188,-43.133858,14.6],
    [-22.903238,-43.13381,14.9],[-22.903262,-43.133762,15.2],[-22.903351,-43.133804,16.1],[-22.903456,-43.133829,17.1],[-22.903589,-43.133831,18],
    [-22.903684,-43.133808,19.1],[-22.903936,-43.133566,22.2],[-22.904079,-43.133518,22.8],[-22.904351,-43.133325,25.3],[-22.90444,-43.133384,25.2],
    [-22.904534,-43.133518,25.1],[-22.904657,-43.133577,25],[-22.904877,-43.133725,24.8],[-22.904947,-43.133622,24.7],[-22.904979,-43.133518,24.6],
    [-22.904999,-43.133304,26],[-22.905036,-43.133224,25.4],[-22.905084,-43.133164,24.8],[-22.905159,-43.133128,24.2],[-22.905342,-43.133068,23],
    [-22.905319,-43.132986,22.4],[-22.905253,-43.13255,19.6],[-22.90522,-43.132478,19],[-22.905156,-43.132401,19.4],[-22.905064,-43.132325,19.8],
    [-22.904969,-43.132255,21.3],[-22.904907,-43.132169,22.8],[-22.904753,-43.131858,26.9]]
    */
    // Volta RIO paper
    [[-22.904753, -43.131858, 26.9], [-22.904907, -43.132169, 22.8], [-22.904969, -43.132255, 21.3], [-22.905064, -43.132325, 19.8], [-22.905156, -43.132401, 19.4],
    [-22.90522, -43.132478, 19], [-22.905253, -43.13255, 19.6], [-22.905319, -43.132986, 22.4], [-22.905342, -43.133068, 23], [-22.905159, -43.133128, 24.2], [-22.905084, -43.133164, 24.8], [-22.905036, -43.133224, 25.4], [-22.904999, -43.133304, 26], [-22.904979, -43.133518, 24.6], [-22.904947, -43.133622, 24.7], [-22.904877, -43.133725, 24.8], [-22.904657, -43.133577, 25], [-22.904534, -43.133518, 25.1], [-22.90444, -43.133384, 25.2], [-22.904351, -43.133325, 25.3], [-22.904079, -43.133518, 22.8], [-22.903936, -43.133566, 22.2], [-22.903684, -43.133808, 19.1], [-22.903589, -43.133831, 18], [-22.903456, -43.133829, 17.1], [-22.903351, -43.133804, 16.1], [-22.903262, -43.133762, 15.2], [-22.903238, -43.13381, 14.9], [-22.903188, -43.133858, 14.6], [-22.903188, -43.133928, 14.3], [-22.903208, -43.134008, 14], [-22.903035, -43.134024, 13.7], [-22.902882, -43.133987, 13.4], [-22.902765, -43.13391, 13.1], [-22.902686, -43.133711, 12], [-22.902644, -43.133654, 11.3], [-22.902595, -43.133618, 10.7], [-22.902535, -43.133606, 10.1], [-22.902451, -43.13364, 9.4], [-22.902424, -43.133677, 9.3], [-22.902417, -43.133767, 9.1], [-22.902611, -43.134199, 8.3], [-22.902734, -43.134528, 7.6], [-22.90277, -43.134641, 7.4], [-22.902783, -43.134788, 7.1], [-22.902669, -43.13499, 6.7], [-22.902511, -43.135065, 6.5], [-22.90239, -43.135077, 6.5], [-22.902309, -43.135081, 6.6], [-22.901604, -43.133607, 5.7], [-22.901288, -43.132873, 6.2], [-22.901162, -43.13258, 6.8], [-22.900905, -43.131985, 7.5], [-22.900853, -43.131866, 7.5], [-22.90079, -43.131759, 7.5], [-22.900727, -43.131689, 7.5], [-22.900181, -43.131194, 7], [-22.89996, -43.131075, 6.7], [-22.899842, -43.131017, 6.6], [-22.899622, -43.130907, 6.3], [-22.899293, -43.130752, 6.4], [-22.899151, -43.130686, 6.5], [-22.89904, -43.130636, 6.6], [-22.897941, -43.130282, 6.4], [-22.897847, -43.130243, 6.4], [-22.897441, -43.130013, 6.2], [-22.897208, -43.129805, 5.6], [-22.897074, -43.129616, 5.5], [-22.896727, -43.128878, 4.8], [-22.896586, -43.128613, 4.3], [-22.896421, -43.128305, 3.7], [-22.896348, -43.128134, 3.5], [-22.8963, -43.127851, 3.2], [-22.896203, -43.126339, 4.1], [-22.896105, -43.126063, 4.1], [-22.89569, -43.125312, 4.3], [-22.895384, -43.124809, 3.9], [-22.895048, -43.124213, 5], [-22.894959, -43.124109, 5.3], [-22.894906, -43.124047, 5.4], [-22.894815, -43.123988, 5.5], [-22.89469, -43.123947, 5.6], [-22.894491, -43.123903, 5.8], [-22.894158, -43.123835, 6.2], [-22.893822, -43.12377, 6.8], [-22.89371, -43.123759, 7], [-22.893484, -43.123742, 7.4], [-22.893011, -43.123726, 7.7], [-22.89265, -43.123741, 7.6], [-22.892288, -43.123753, 7.6], [-22.892129, -43.123757, 7.6], [-22.891806, -43.123803, 7.6], [-22.891473, -43.123861, 7.4], [-22.891368, -43.123882, 7.4], [-22.890948, -43.123947, 7.2], [-22.890577, -43.124021, 6.9], [-22.890045, -43.124157, 6.1], [-22.889794, -43.124207, 6], [-22.888638, -43.124477, 7.8], [-22.887645, -43.124711, 8.9], [-22.88698, -43.124884, 9.1], [-22.886548, -43.125003, 9], [-22.886155, -43.125101, 9.3], [-22.886048, -43.125109, 9.3], [-22.885959, -43.125084, 9.4], [-22.88586, -43.125028, 9.5], [-22.885751, -43.124909, 9.8], [-22.885721, -43.124831, 9.9], [-22.885246, -43.123346, 11.8], [-22.88517, -43.123099, 11.9], [-22.884892, -43.122285, 11.1], [-22.884558, -43.121262, 10.1], [-22.883251, -43.117156, 7.9], [-22.883147, -43.116865, 8], [-22.883013, -43.11644, 8.1], [-22.882906, -43.116096, 7.8], [-22.88269, -43.115678, 6.4], [-22.882547, -43.11543, 6.1], [-22.882331, -43.115135, 6.2], [-22.882129, -43.114894, 6.5], [-22.881951, -43.114712, 6.6], [-22.881691, -43.11449, 6.8], [-22.881431, -43.114325, 7.4], [-22.881191, -43.1142, 7.8], [-22.880769, -43.114083, 8.1], [-22.880453, -43.114031, 7.6], [-22.880003, -43.113974, 7.1], [-22.879664, -43.114034, 6.8], [-22.879371, -43.114148, 6.5], [-22.879217, -43.114226, 6.4], [-22.879021, -43.114376, 6.2], [-22.878882, -43.114549, 5.7], [-22.878094, -43.115746, 5.8], [-22.878034, -43.115837, 5.9], [-22.877973, -43.115908, 6.4], [-22.877018, -43.117034, 10.3], [-22.876532, -43.117682, 11.1], [-22.875965, -43.118508, 11], [-22.875765, -43.118835, 9.6], [-22.875546, -43.119193, 8.3], [-22.875295, -43.119673, 6.8], [-22.875175, -43.119906, 6.1], [-22.874889, -43.120539, 3.9], [-22.874681, -43.121075, 3.3], [-22.874539, -43.121486, 3.2], [-22.874373, -43.122049, 3.3], [-22.874265, -43.122492, 3.5], [-22.874115, -43.123222, 2.8], [-22.874048, -43.123673, 1.9], [-22.873915, -43.125125, 0], [-22.873609, -43.128542, 0], [-22.873365, -43.131224, 0], [-22.873192, -43.133074, 0], [-22.873164, -43.13338, 0], [-22.873045, -43.134898, 0], [-22.872973, -43.13564, 0], [-22.872895, -43.136428, 0], [-22.87193, -43.14718, 0], [-22.871553, -43.151384, 0], [-22.871114, -43.156236, 0], [-22.870929, -43.158137, 0], [-22.868506, -43.185068, 0], [-22.867678, -43.19426, 0], [-22.867631, -43.194904, 0], [-22.867625, -43.195423, 0], [-22.867642, -43.195966, 0], [-22.867678, -43.196527, 0], [-22.867739, -43.197049, 0], [-22.867814, -43.197557, 0], [-22.867895, -43.197978, 0], [-22.868043, -43.198624, 0], [-22.868186, -43.199109, 0], [-22.868403, -43.199745, 0], [-22.868588, -43.200205, 0], [-22.868853, -43.200791, 0], [-22.869126, -43.201326, 0], [-22.86934, -43.201698, 0], [-22.869712, -43.202275, 0], [-22.870248, -43.203002, 0.1], [-22.870487, -43.203294, 0.2], [-22.871084, -43.20394, 0.6], [-22.876189, -43.208678, 5.1], [-22.884585, -43.21647, 6.9], [-22.885392, -43.217022, 6.5], [-22.885651, -43.217146, 6.2], [-22.885793, -43.217195, 6.1], [-22.886072, -43.21727, 5.8], [-22.886367, -43.217303, 5.3], [-22.886683, -43.21728, 5], [-22.887017, -43.217186, 5.2], [-22.887366, -43.217002, 5.6], [-22.888267, -43.216584, 6.6], [-22.888952, -43.216273, 7], [-22.890042, -43.215736, 7.1], [-22.896271, -43.212767, 5.9], [-22.896845, -43.212467, 5.5], [-22.89707, -43.212332, 5.6], [-22.897334, -43.212144, 5.6], [-22.897514, -43.211982, 5.6], [-22.899137, -43.210267, 5.2], [-22.899315, -43.210121, 5.4], [-22.899512, -43.209985, 5.9], [-22.899835, -43.209844, 6.4], [-22.899943, -43.209768, 6.6], [-22.900139, -43.209549, 7], [-22.90018, -43.209441, 7.2], [-22.90021, -43.209297, 7.3], [-22.900193, -43.208696, 8], [-22.900166, -43.208599, 8.1], [-22.900089, -43.208529, 8.2], [-22.899942, -43.208415, 8.4], [-22.899902, -43.20839, 8.3], [-22.899677, -43.208251, 8.3], [-22.899433, -43.208092, 8.3], [-22.899211, -43.207953, 8.4], [-22.899176, -43.207932, 8.5], [-22.89905, -43.20785, 8.6], [-22.899007, -43.207821, 8.6], [-22.898341, -43.207349, 9.2], [-22.898204, -43.207183, 9.2], [-22.897762, -43.206067, 9.1], [-22.896522, -43.203056, 6.6], [-22.89646, -43.202923, 6.5], [-22.896524, -43.20289, 6.4], [-22.897021, -43.202642, 5.9], [-22.897078, -43.202617, 5.8], [-22.897211, -43.202551, 5.8], [-22.898036, -43.202147, 7], [-22.898216, -43.202048, 7.3], [-22.898316, -43.202002, 7.4], [-22.898671, -43.201826, 8.2], [-22.898842, -43.201737, 8.7], [-22.898859, -43.201579, 9], [-22.898901, -43.20145, 9.1], [-22.898962, -43.201339, 9.3], [-22.899052, -43.201259, 9.4], [-22.89915, -43.201212, 9.6], [-22.899234, -43.201208, 9.9], [-22.899317, -43.201216, 10.1], [-22.899414, -43.201249, 10.4], [-22.899563, -43.201281, 10.7], [-22.89961, -43.201261, 11.1], [-22.899669, -43.201223, 11.4], [-22.899823, -43.201121, 12.1], [-22.900514, -43.200685, 18.3], [-22.901515, -43.199991, 31.9], [-22.901793, -43.199801, 33.1], [-22.902645, -43.19945, 23.8], [-22.902716, -43.199417, 22.6], [-22.903227, -43.19902, 15.7], [-22.903504, -43.198873, 13.2], [-22.906582, -43.197703, 7.6], [-22.908556, -43.196943, 8.5], [-22.908894, -43.19681, 9.3], [-22.910314, -43.19624, 11.2], [-22.91089, -43.196028, 11.7], [-22.911406, -43.195863, 12.2], [-22.914066, -43.194832, 13.5], [-22.915574, -43.194243, 15.7], [-22.915791, -43.194158, 15.7], [-22.91602, -43.194098, 15], [-22.916224, -43.194073, 14.5], [-22.916514, -43.19407, 13.8], [-22.916832, -43.194114, 13], [-22.917157, -43.194125, 12.3], [-22.91799, -43.194217, 12.4], [-22.918216, -43.194254, 12.7], [-22.918499, -43.194282, 13], [-22.918913, -43.194264, 13.6], [-22.919081, -43.194233, 13.8], [-22.919262, -43.194167, 14.2], [-22.919602, -43.194056, 14], [-22.919673, -43.194016, 14], [-22.91976, -43.193946, 14], [-22.919832, -43.193808, 14], [-22.919843, -43.19377, 14], [-22.919886, -43.193868, 14], [-22.919943, -43.193909, 23.2], [-22.919973, -43.19393, 25], [-22.92003, -43.19394, 26.8], [-22.920379, -43.193805, 35.6], [-22.92045, -43.193757, 38.2], [-22.920648, -43.193606, 43.8], [-22.922964, -43.191903, 112.4], [-22.928734, -43.187501, 98.6], [-22.930461, -43.18614, 26.6], [-22.930901, -43.185707, 22.6], [-22.931539, -43.185288, 21.9], [-22.93296, -43.18463, 20.8], [-22.933076, -43.184506, 20.8], [-22.933135, -43.184358, 20.8], [-22.933136, -43.184217, 20.8], [-22.933126, -43.184095, 20.7], [-22.932951, -43.183883, 20.6], [-22.932849, -43.183643, 20.5], [-22.932815, -43.183539, 20.4], [-22.932743, -43.183322, 20], [-22.932717, -43.183245, 27.1], [-22.93255, -43.182746, 27.5], [-22.932497, -43.182586, 27.5], [-22.932364, -43.182187, 24.6], [-22.932247, -43.181855, 23.1], [-22.932217, -43.181772, 22.7], [-22.932187, -43.181684, 22.2], [-22.932145, -43.181563, 21.7], [-22.932078, -43.181368, 21.4], [-22.931995, -43.181126, 21], [-22.931874, -43.180769, 20.5], [-22.931794, -43.180542, 20.6], [-22.931726, -43.180344, 20.8], [-22.931684, -43.180225, 21], [-22.931609, -43.180007, 21.3], [-22.931521, -43.17975, 15.7], [-22.931424, -43.17947, 14.5], [-22.931395, -43.179386, 14.1], [-22.931352, -43.17923, 13.8], [-22.931261, -43.178905, 13.5], [-22.931207, -43.178713, 13.8], [-22.931198, -43.178683, 14.1], [-22.931155, -43.178529, 14.3], [-22.931049, -43.178169, 14.8], [-22.930977, -43.177921, 14.7], [-22.930965, -43.177835, 14.6], [-22.931027, -43.17772, 14.6], [-22.931155, -43.177602, 14.5], [-22.931368, -43.177599, 14.4], [-22.931495, -43.177586, 14.5], [-22.932209, -43.177539, 15.3], [-22.932503, -43.177534, 15], [-22.932626, -43.17749, 14.9], [-22.932755, -43.177412, 15.2], [-22.932959, -43.17726, 15.9], [-22.933015, -43.177213, 16.3], [-22.933169, -43.17706, 17.2], [-22.933222, -43.176999, 17.5], [-22.933463, -43.176745, 18.3], [-22.933691, -43.1765, 18.3], [-22.934022, -43.176146, 18.5], [-22.934076, -43.176089, 18.6], [-22.9343, -43.175851, 19], [-22.93455, -43.175572, 18.9], [-22.934964, -43.175108, 18.9], [-22.935434, -43.17518, 19], [-22.936011, -43.175393, 20.3], [-22.936572, -43.175601, 19.7], [-22.936877, -43.17571, 19], [-22.93687, -43.175556, 19], [-22.936867, -43.175519, 21.3], [-22.936839, -43.175122, 22.2], [-22.937668, -43.175019, 26.5], [-22.937825, -43.174962, 35.1], [-22.938166, -43.174838, 35.9], [-22.938782, -43.174615, 30.3], [-22.939007, -43.174147, 25.8], [-22.938726, -43.173809, 22.4], [-22.938664, -43.173758, 21.5], [-22.938536, -43.17371, 20.7], [-22.938479, -43.173706, 19.7], [-22.938197, -43.173739, 17.7], [-22.937374, -43.173923, 18.1], [-22.937274, -43.173873, 18], [-22.937179, -43.173785, 17.8], [-22.937112, -43.173672, 17.6], [-22.937066, -43.173557, 17.4], [-22.937065, -43.173435, 16.9], [-22.937099, -43.173356, 16.3], [-22.937259, -43.173124, 8.5], [-22.937508, -43.172764, 8.7], [-22.937795, -43.172351, 11], [-22.937865, -43.172232, 12.4], [-22.937975, -43.17201, 15.2], [-22.938265, -43.171398, 24], [-22.9384, -43.171222, 26.1], [-22.938604, -43.171048, 27.3], [-22.938711, -43.171002, 27.8], [-22.938849, -43.17095, 28.2], [-22.938993, -43.170922, 28.6], [-22.939265, -43.170915, 29], [-22.939472, -43.170964, 28], [-22.940681, -43.171648, 29.6], [-22.940803, -43.171765, 30.4], [-22.941954, -43.173396, 37], [-22.941969, -43.173416, 32.4], [-22.942302, -43.173864, 28.2], [-22.942916, -43.174503, 17.1], [-22.943041, -43.174635, 15.8], [-22.943106, -43.174711, 14.5], [-22.943186, -43.174828, 13.1], [-22.943251, -43.174948, 11.7], [-22.9433, -43.175069, 10.4], [-22.943374, -43.175325, 8.8], [-22.943382, -43.175476, 8.3], [-22.943356, -43.175729, 6.9], [-22.943306, -43.175909, 6.2], [-22.943234, -43.176061, 5.8], [-22.942566, -43.176926, 5.2], [-22.942433, -43.177097, 8], [-22.942269, -43.177305, 9]]



  //[[-23.007639, -43.310359],[-23.012166, -43.308384],[-23.010107, -43.304690],[-23.008484, -43.298801],[-23.010301, -43.296672],[-22.983902, -43.227030]]
/*
  [[-22.9832, -43.204192, 24.5],[-22.983172,-43.204751,22.8],[-22.983167,-43.204848,22.5],[-22.983062,-43.204841,22.3],[-22.982665,-43.204814,21.9],[-22.982223,-43.204785,21.3],
  [-22.982097,-43.204776,21.2],[-22.981695,-43.204749,20.6],[-22.981559,-43.20474,20.2],[-22.981057,-43.204707,18.5],[-22.980259,-43.204653,14.2],[-22.98018,-43.204648,13.5]
  ,
  [-22.979792,-43.203336,6.6],[-22.979596,-43.202711,6],[-22.979569,-43.202631,6],[-22.979537,-43.202536,6],[-22.979066,-43.200724,6],[-22.978807,-43.199897,6],[-22.978653,-43.199537,6],
  [-22.978608,-43.199343,6],[-22.978479,-43.199023,7.1],[-22.97831,-43.198741,8.2],[-22.978165,-43.198611,8.7],[-22.977942,-43.198501,9.2],[-22.977595,-43.198355,10.2],
  [-22.977141,-43.198309,12.8],[-22.976933,-43.198194,14],[-22.976843,-43.198072,14.3],[-22.976782,-43.19791,14.5],[-22.976774,-43.197711,15.1],[-22.976773,-43.197368,19.6],
  [-22.976843,-43.197062,25.8],[-22.976955,-43.196572,38.9],[-22.977,-43.196177,49.8],[-22.976983,-43.195744,59.5],[-22.976767,-43.194732,64.6],[-22.976744,-43.194517,62.7],
  [-22.976792,-43.194349,61.6],[-22.977019,-43.193806,53.8],[-22.977065,-43.193706,52.5],[-22.977431,-43.19286,42.4],[-22.977496,-43.192718,41.5],[-22.977708,-43.191708,34.4],
  [-22.977812,-43.191252,32.9],[-22.977964,-43.190597,30.6],[-22.978152,-43.189707,29.3],[-22.978252,-43.189201,29.8],[-22.97826,-43.189156,29.9],[-22.978286,-43.189024,30],
  [-22.978334,-43.188793,29],[-22.97776,-43.188542,28.1],[-22.977184,-43.188313,25.2],[-22.976764,-43.1881,20.8],[-22.976381,-43.187875,20.4]]
*/
  /*
      [[47.5468, -0.7910], [48.8068, -0.1318], [49.1242, 1.6699], [49.4966, 3.2958], [51.4266, 2.8564], [51.7542, 2.1093]],
      [[48.0193, -2.8125], [46.3165, -2.8564], [44.9336, -1.0107], [44.5278, 1.5820], [44.8714, 3.7353], [45.8287, 5.1855], [48.1953, 5.1416]],
      [[45.9205, 0.4394], [46.7699, 0.9228], [47.6061, 2.5488], [47.7540, 3.3837]]
  */
  ];

  var xroute = [];
  for(var i =0; i< multiCoords1[0].length; i++) {
    xroute.push([multiCoords1[0][i][0],multiCoords1[0][i][1]]);
  }

  multiCoords1 = [ xroute ];

    var map = L.map('map', {
        center: [-22.930900,-43.177305], //[-22.9832, -43.204192],
        zoom: 15,
        layers: [
            L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            })
        ]
    });

    var pts = [[-22.94222, -43.177259],[-22.941894, -43.173482],[-22.937211, -43.173085],[-22.937824, -43.174959],
    [-22.936767, -43.175527],[-22.934519, -43.17554],[-22.931484, -43.179765],[-22.932617, -43.183284],[-22.919929, -43.193932],
    [-22.904879,-43.131784]];

    for(var i =0; i< pts.length; i++) {
       L.marker(pts[i]).addTo(map);
    }

    // --- Simple arrow ---
    var arrow = L.polyline([[57, -19], [60, -12]], {}).addTo(map);
    var arrowHead = L.polylineDecorator(arrow, {
        patterns: [
            {offset: '100%', repeat: 0, symbol: L.Symbol.arrowHead({pixelSize: 15, polygon: false, pathOptions: {stroke: true}})}
        ]
    }).addTo(map);

    // --- Polygon, with an inner ring ---
    var polygon = L.polygon([[[54, -6], [55, -7], [56, -2], [55, 1], [53, 0]], [[54, -3], [54, -2], [55, -1], [55, -5]]], {color: "#ff7800", weight: 1}).addTo(map);
    var pd = L.polylineDecorator(polygon, {
        patterns: [
            {offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 0})}
        ]
    }).addTo(map);

    // --- Multi-pattern without Polyline ---
    var pathPattern = L.polylineDecorator(
        [ [ 49.543519, -12.469833 ], [ 49.808981, -12.895285 ], [ 50.056511, -13.555761 ], [ 50.217431, -14.758789 ], [ 50.476537, -15.226512 ], [ 50.377111, -15.706069 ], [ 50.200275, -16.000263 ], [ 49.860606, -15.414253 ], [ 49.672607, -15.710152 ], [ 49.863344, -16.451037 ], [ 49.774564, -16.875042 ], [ 49.498612, -17.106036 ], [ 49.435619, -17.953064 ], [ 49.041792, -19.118781 ], [ 48.548541, -20.496888 ], [ 47.930749, -22.391501 ], [ 47.547723, -23.781959 ], [ 47.095761, -24.941630 ], [ 46.282478, -25.178463 ], [ 45.409508, -25.601434 ], [ 44.833574, -25.346101 ], [ 44.039720, -24.988345 ] ],
        {
            patterns: [
                { offset: 12, repeat: 25, symbol: L.Symbol.dash({pixelSize: 10, pathOptions: {color: '#f00', weight: 2}}) },
                { offset: 0, repeat: 25, symbol: L.Symbol.dash({pixelSize: 0}) }
            ]
        }
    ).addTo(map);

    // --- Markers proportionnaly located ---
    var markerLine = L.polyline([[58.44773, -28.65234], [52.9354, -23.33496], [53.01478, -14.32617], [58.1707, -10.37109], [59.68993, -0.65918]], {}).addTo(map);
    var markerPatterns = L.polylineDecorator(markerLine, {
        patterns: [
            { offset: '5%', repeat: '10%', symbol: L.Symbol.marker()}
        ]
    }).addTo(map);

    // --- Example with a rotated marker ---
    var pathPattern = L.polylineDecorator(
        [ [ 42.9, -15 ], [ 44.18, -11.4 ], [ 45.77, -8.0 ], [ 47.61, -6.4 ], [ 49.41, -6.1 ], [ 51.01, -7.2 ] ],
        {
            patterns: [
                { offset: 0, repeat: 10, symbol: L.Symbol.dash({pixelSize: 5, pathOptions: {color: '#000', weight: 1, opacity: 0.2}}) },
                { offset: '16%', repeat: '33%', symbol: L.Symbol.marker({rotate: true, markerOptions: {
                    icon: L.icon({
                        iconUrl: 'icon_plane.png',
                        iconAnchor: [16, 16]
                    })
                }})}
            ]
        }
    ).addTo(map);



    var plArray = [];
    for(var i=0; i<multiCoords1.length; i++) {
        plArray.push(L.polyline(  multiCoords1[i]  ).addTo(map));
    }
    L.polylineDecorator(multiCoords1, {
        patterns: [
            {offset: 25, repeat: 50, symbol: L.Symbol.arrowHead({pixelSize: 15, pathOptions: {fillOpacity: 1, weight: 0}})}
        ]
    }).addTo(map);
}
