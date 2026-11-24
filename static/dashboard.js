    // =========================================================================
    // 1. SOURCE TABLES (53 Decrees, 75 Spatial Locations, 100 Receiver Rows)
    // =========================================================================
    let PETITIONERS_TABLE = [
      { decree_id: 1, petitioner_name: `Sheik Yahya`, petitioner_title: `Sheik`, petitioner_gender: `male`, complaint_subject: `desolation`, month: `M`, year: 1059 },
      { decree_id: 2, petitioner_name: `Ayse Hatun`, petitioner_title: `Subject`, petitioner_gender: `female`, complaint_subject: `homicide`, month: `M`, year: 1059 },
      { decree_id: 5, petitioner_name: `Rıdvan`, petitioner_title: `Subject`, petitioner_gender: `male`, complaint_subject: `land dispute`, month: `M`, year: 1059 },
      { decree_id: 6, petitioner_name: `Hristo`, petitioner_title: `Non-muslim subject`, petitioner_gender: `male`, complaint_subject: `harassment`, month: `M`, year: 1059 },
      { decree_id: 7, petitioner_name: `Hasan Pasha`, petitioner_title: `Vizier`, petitioner_gender: `male`, complaint_subject: `embezzlement`, month: `M`, year: 1059 },
      { decree_id: 8, petitioner_name: `Mos`, petitioner_title: `Non-muslim subject`, petitioner_gender: `male`, complaint_subject: `debt dispute`, month: `M`, year: 1059 },
      { decree_id: 9, petitioner_name: `Kenan Pasha`, petitioner_title: `Vizier`, petitioner_gender: `male`, complaint_subject: `revenue dispute`, month: `M`, year: 1059 },
      { decree_id: 10, petitioner_name: `Halil`, petitioner_title: `Sanjak Alaybegi`, petitioner_gender: `male`, complaint_subject: `misconduct`, month: `M`, year: 1059 },
      { decree_id: 11, petitioner_name: `Abdülkerim`, petitioner_title: `Kadi`, petitioner_gender: `male`, complaint_subject: `illegal taxation`, month: `M`, year: 1059 },
      { decree_id: 12, petitioner_name: `Unnamed Janissary`, petitioner_title: `Janissary`, petitioner_gender: `male`, complaint_subject: `runaway slaves`, month: `M`, year: 1059 },
      { decree_id: 14, petitioner_name: `Seyyid Çelebi`, petitioner_title: `Seyyid`, petitioner_gender: `male`, complaint_subject: `encroachment on waqf water`, month: `M`, year: 1059 },
      { decree_id: 15, petitioner_name: `Yerlü olanlar (Aksaray Ahalisi)`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `refusal to pay customary sheep pasturage fee`, month: `M`, year: 1059 },
      { decree_id: 16, petitioner_name: `Karapınar Evkafı Reayası`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `oppression/misconduct by waqf trustee Bekir`, month: `M`, year: 1059 },
      { decree_id: 17, petitioner_name: `Halil`, petitioner_title: `Janissary/Waqf Trustee`, petitioner_gender: `male`, complaint_subject: `refusal of Janissaries Sefer and Piyale to pay debt owed to waqf fund`, month: `M`, year: 1059 },
      { decree_id: 18, petitioner_name: `Mümine`, petitioner_title: `Subject`, petitioner_gender: `female`, complaint_subject: `fraudulent/underpriced sale of real estate by attorney and unlawful retention of property`, month: `M`, year: 1059 },
      { decree_id: 19, petitioner_name: `Unnamed Tobcı Başı`, petitioner_title: `Tobcı Başı`, petitioner_gender: `male`, complaint_subject: `unlawful imprisonment of a gunner in Boğazhisar castle and demand for transfer to Istanbul`, month: `M`, year: 1059 },
      { decree_id: 20, petitioner_name: `Gölbazarı Kazası Ahalisi`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `oppression, extortion, and excessive illegal fees charged by Kadi Ahmed`, month: `M`, year: 1059 },
      { decree_id: 21, petitioner_name: `Halil bin Fethullah & Emrullah bin Şükrullah`, petitioner_title: `Customs Weighmaster / Kapandâr`, petitioner_gender: `male`, complaint_subject: `request for decree to collect customary 4 akçe customs fee per unit and prevent interference`, month: `M`, year: 1059 },
      { decree_id: 22, petitioner_name: `Shopkeepers & Bakers of Çekmece`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `assault and extortion of illegal fees from shopkeepers and bakers by the market inspector (bazar başı)`, month: `M`, year: 1059 },
      { decree_id: 23, petitioner_name: `Havas-ı Mahmud Paşa Kadısı`, petitioner_title: `Kadi`, petitioner_gender: `male`, complaint_subject: `jurisdictional dispute over legal cases of non-local resident peasants (hariç reaya)`, month: `M`, year: 1059 },
      { decree_id: 24, petitioner_name: `Mustafa Safa`, petitioner_title: `Former Chief Accountant (Sabıkan Baş Muhasebeci)`, petitioner_gender: `male`, complaint_subject: `property damage from neighbor's construction, water/drainage dispute, and extortion of repair fees`, month: `M`, year: 1059 },
      { decree_id: 25, petitioner_name: `Fatma Hatun`, petitioner_title: `Subject`, petitioner_gender: `female`, complaint_subject: `non-payment of mahr upon divorce and unlawful seizure of personal property by ex-husband`, month: `M`, year: 1059 },
      { decree_id: 27, petitioner_name: `Rumeli Eyaleti Züamâ ve Erbab-ı Tımarı`, petitioner_title: `Zaim / Timar Holder`, petitioner_gender: `group`, complaint_subject: `collection and reimbursement of shared campaign expenses and loans (6,330 guruş)`, month: `M`, year: 1059 },
      { decree_id: 28, petitioner_name: `Mehmed`, petitioner_title: `Kapu Kethüdası`, petitioner_gender: `male`, complaint_subject: `request for sale of soap from one ship in Midilli at official rate and dispatch of remaining two ships to Istanbul`, month: `M`, year: 1059 },
      { decree_id: 29, petitioner_name: `Ismail`, petitioner_title: `Mütesellim`, petitioner_gender: `male`, complaint_subject: `dispute over mutasallim appointment after previous officer's death and demand to enforce control via official deed (temessük)`, month: `M`, year: 1059 },
      { decree_id: 30, petitioner_name: `Mustafa`, petitioner_title: `Çorbacı`, petitioner_gender: `male`, complaint_subject: `refusal of Osman Beyoğlu Ahmed in Yenişehir to pay a debt of 2,200 guruş`, month: `M`, year: 1059 },
      { decree_id: 31, petitioner_name: `People of Yorgi Castle`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `Resettlement`, month: `M`, year: 1059 },
      { decree_id: 32, petitioner_name: `Residents of Tatarpazarı`, petitioner_title: `Kadi / Çavuş / Subject`, petitioner_gender: `group`, complaint_subject: `Tax Obstruction`, month: `M`, year: 1059 },
      { decree_id: 33, petitioner_name: `Ali`, petitioner_title: `Subject`, petitioner_gender: `male`, complaint_subject: `Inheritance`, month: `M`, year: 1059 },
      { decree_id: 34, petitioner_name: `Serdar Hüseyin Paşa`, petitioner_title: `Serdar`, petitioner_gender: `male`, complaint_subject: `Troop Supply`, month: `M`, year: 1059 },
      { decree_id: 35, petitioner_name: `Ali`, petitioner_title: `Subject`, petitioner_gender: `male`, complaint_subject: `Revenue Collection`, month: `M`, year: 1059 },
      { decree_id: 36, petitioner_name: `Ahmed Kapudan`, petitioner_title: `Kalyon Kapudanı`, petitioner_gender: `male`, complaint_subject: `Confiscation`, month: `M`, year: 1059 },
      { decree_id: 37, petitioner_name: `Tire Eşraf ve Fukahası`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `Extortion`, month: `M`, year: 1059 },
      { decree_id: 38, petitioner_name: `Vezir Mehmed Paşa`, petitioner_title: `Vizier`, petitioner_gender: `male`, complaint_subject: `Property Purchase`, month: `M`, year: 1059 },
      { decree_id: 39, petitioner_name: `Mehmed`, petitioner_title: `Usta`, petitioner_gender: `male`, complaint_subject: `Nonpayment`, month: `M`, year: 1059 },
      { decree_id: 40, petitioner_name: `Mehmed`, petitioner_title: `Usta`, petitioner_gender: `male`, complaint_subject: `Nonpayment`, month: `M`, year: 1059 },
      { decree_id: 41, petitioner_name: `Mustafa`, petitioner_title: `Subject`, petitioner_gender: `male`, complaint_subject: `debt dispute`, month: `M`, year: 1059 },
      { decree_id: 42, petitioner_name: `Bilecik Naibi ve Ahalisi`, petitioner_title: `Deputy judge / Subject`, petitioner_gender: `group`, complaint_subject: `Extortion`, month: `M`, year: 1059 },
      { decree_id: 43, petitioner_name: `Seydişehri Ahalisi`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `Extortion`, month: `M`, year: 1059 },
      { decree_id: 44, petitioner_name: `Mevlana Halil (Sabık Çal Kadısı) ve Kadılar`, petitioner_title: `Kadi`, petitioner_gender: `male`, complaint_subject: `Confiscation`, month: `M`, year: 1059 },
      { decree_id: 45, petitioner_name: `Mehmed`, petitioner_title: `Messenger / legal guardian`, petitioner_gender: `male`, complaint_subject: `Nonpayment`, month: `M`, year: 1059 },
      { decree_id: 46, petitioner_name: `Mehmed`, petitioner_title: `Janissary`, petitioner_gender: `male`, complaint_subject: `Appointment`, month: `M`, year: 1059 },
      { decree_id: 47, petitioner_name: `Hoyran Deputy Judge Mevlana Mustafa and subjects`, petitioner_title: `Naib / Subject`, petitioner_gender: `group`, complaint_subject: `Extortion`, month: `M`, year: 1059 },
      { decree_id: 48, petitioner_name: `Hasan`, petitioner_title: `Janissary`, petitioner_gender: `male`, complaint_subject: `Appointment`, month: `M`, year: 1059 },
      { decree_id: 49, petitioner_name: `Mustafa`, petitioner_title: `Trustee`, petitioner_gender: `male`, complaint_subject: `Appointment`, month: `M`, year: 1059 },
      { decree_id: 50, petitioner_name: `Subjects of Kars Province`, petitioner_title: `Subject`, petitioner_gender: `group`, complaint_subject: `Resettlement`, month: `M`, year: 1059 },
      { decree_id: 51, petitioner_name: `Preachers and Muezzins of Edincik`, petitioner_title: `Preachers and Muezzins`, petitioner_gender: `group`, complaint_subject: `Property`, month: `M`, year: 1059 },
      { decree_id: 52, petitioner_name: `Shield-maker`, petitioner_title: `Artisan`, petitioner_gender: `male`, complaint_subject: `Debt`, month: `M`, year: 1059 },
      { decree_id: 53, petitioner_name: `Inhabitants of Rahova Village`, petitioner_title: `Subjects`, petitioner_gender: `group`, complaint_subject: `Extortion`, month: `M`, year: 1059 },
      { decree_id: 54, petitioner_name: `Creditors`, petitioner_title: `Creditor / Subject`, petitioner_gender: `group`, complaint_subject: `Debt`, month: `M`, year: 1059 },
      { decree_id: 55, petitioner_name: `Stipendiaries of Gazi Murad Pasha Waqf`, petitioner_title: `Waqf Beneficiaries / Stipend Holders`, petitioner_gender: `group`, complaint_subject: `Property`, month: `M`, year: 1059 },
      { decree_id: 56, petitioner_name: `Ramazan`, petitioner_title: `Commander`, petitioner_gender: `male`, complaint_subject: `Debt`, month: `M`, year: 1059 },
      { decree_id: 57, petitioner_name: `Pirlepe Kadısı Mevlana Ali`, petitioner_title: `Kadi / Local Magistrate`, petitioner_gender: `male`, complaint_subject: `Resettlement`, month: `Zilhicce`, year: `1058 / 1059` }
    ];

    let LOCATIONS_TABLE = [
      { location_id: 1, decree_id: 1, location_name: `Syria`, receiver_location: `Haleb`, lat: 36.206960, long: 37.131759 },
      { location_id: 2, decree_id: 1, location_name: `Syria`, receiver_location: `Kilis`, lat: 36.716529, long: 37.114378 },
      { location_id: 3, decree_id: 1, location_name: `Syria`, receiver_location: `Azez`, lat: 36.587947, long: 37.047250 },
      { location_id: 4, decree_id: 2, location_name: `Edirne`, receiver_location: `Edirne`, lat: 41.677459, long: 26.556157 },
      { location_id: 5, decree_id: 2, location_name: `Edirne`, receiver_location: `Meğri`, lat: 40.854152, long: 25.745879 },
      { location_id: 6, decree_id: 2, location_name: `Edirne`, receiver_location: `Edirne`, lat: 41.677459, long: 26.556157 },
      { location_id: 7, decree_id: 5, location_name: `Greece`, receiver_location: `Yenisehir`, lat: 39.639075, long: 22.418422 },
      { location_id: 8, decree_id: 5, location_name: `Greece`, receiver_location: `Izdin`, lat: 38.900563, long: 22.432991 },
      { location_id: 9, decree_id: 6, location_name: `Bulgaria`, receiver_location: `Ahyolu`, lat: 42.568764, long: 27.615192 },
      { location_id: 10, decree_id: 7, location_name: `Greece`, receiver_location: `Tripolitsa`, lat: 37.510295, long: 22.372151 },
      { location_id: 11, decree_id: 8, location_name: `Greece`, receiver_location: `Rhodes`, lat: 36.461982, long: 28.303570 },
      { location_id: 12, decree_id: 9, location_name: `Aydın`, receiver_location: `Tire`, lat: 38.089362, long: 27.734640 },
      { location_id: 13, decree_id: 10, location_name: `Aydın`, receiver_location: `Aydın`, lat: 37.839682, long: 27.842030 },
      { location_id: 14, decree_id: 11, location_name: `Trabzon`, receiver_location: `Trabzon`, lat: 41.018154, long: 39.960285 },
      { location_id: 15, decree_id: 12, location_name: `Karahisar`, receiver_location: `Karahisar`, lat: 38.7569, long: 30.5387 },
      { location_id: 16, decree_id: 14, location_name: `Eskişehir`, receiver_location: `Eskişehir`, lat: 39.7767, long: 30.5206 },
      { location_id: 17, decree_id: 15, location_name: `Aksaray`, receiver_location: `Aksaray`, lat: 38.3687, long: 34.0370 },
      { location_id: 18, decree_id: 16, location_name: `Karapınar`, receiver_location: `Konya`, lat: 37.7167, long: 33.5500 },
      { location_id: 19, decree_id: 17, location_name: `Karapınar`, receiver_location: `Konya`, lat: 37.7167, long: 33.5500 },
      { location_id: 20, decree_id: 18, location_name: `İznikmid`, receiver_location: `İznikmid`, lat: 40.7654, long: 29.9408 },
      { location_id: 21, decree_id: 19, location_name: `Çanakkale`, receiver_location: `Boğazhisar`, lat: 40.1490, long: 26.4050 },
      { location_id: 22, decree_id: 20, location_name: `Gölbazarı`, receiver_location: `Kütahya`, lat: 40.2828, long: 30.3172 },
      { location_id: 23, decree_id: 21, location_name: `Baghdad`, receiver_location: `Baghdad`, lat: 33.3152, long: 44.3661 },
      { location_id: 24, decree_id: 22, location_name: `Çekmece`, receiver_location: `Haslar`, lat: 41.0208, long: 28.5808 },
      { location_id: 25, decree_id: 23, location_name: `Havas-ı Mahmud Paşa`, receiver_location: `Havsa`, lat: 41.5489, long: 26.8214 },
      { location_id: 26, decree_id: 24, location_name: `Mahrusa (İstanbul)`, receiver_location: `Mahrusa (İstanbul)`, lat: 41.0082, long: 28.9784 },
      { location_id: 27, decree_id: 25, location_name: `Çanakkale`, receiver_location: `Boğazhisar`, lat: 40.1490, long: 26.4050 },
      { location_id: 28, decree_id: 27, location_name: `Rumeli Eyaleti`, receiver_location: `Sofya`, lat: 42.6977, long: 23.3219 },
      { location_id: 29, decree_id: 28, location_name: `Greece`, receiver_location: `Midilli`, lat: 39.1067, long: 26.5558 },
      { location_id: 30, decree_id: 29, location_name: `Kayseri`, receiver_location: `Kayseri`, lat: 38.7205, long: 35.4826 },
      { location_id: 31, decree_id: 30, location_name: `Bursa`, receiver_location: `Bursa`, lat: 40.1885, long: 29.0610 },
      { location_id: 32, decree_id: 31, location_name: `Bursa`, receiver_location: `Mihaliç`, lat: 40.2161, long: 28.3581 },
      { location_id: 33, decree_id: 32, location_name: `Bulgaria`, receiver_location: `Tatarpazarı`, lat: 42.1928, long: 24.3336 },
      { location_id: 34, decree_id: 33, location_name: `Bursa`, receiver_location: `Bursa`, lat: 40.1885, long: 29.0610 },
      { location_id: 35, decree_id: 34, location_name: `Haleb`, receiver_location: `Haleb`, lat: 36.206960, long: 37.131759 },
      { location_id: 36, decree_id: 34, location_name: `Haleb`, receiver_location: `Kilis`, lat: 36.716529, long: 37.114378 },
      { location_id: 37, decree_id: 34, location_name: `Haleb`, receiver_location: `Azez`, lat: 36.587947, long: 37.047250 },
      { location_id: 38, decree_id: 35, location_name: `Izmir`, receiver_location: `Menemen`, lat: 38.6011, long: 27.0678 },
      { location_id: 39, decree_id: 35, location_name: `Manisa`, receiver_location: `Manisa`, lat: 38.6191, long: 27.4289 },
      { location_id: 40, decree_id: 35, location_name: `Kütahya`, receiver_location: `Kütahya`, lat: 39.4167, long: 29.9833 },
      { location_id: 41, decree_id: 35, location_name: `Aydın`, receiver_location: `Güzelhisar`, lat: 37.8444, long: 27.8458 },
      { location_id: 42, decree_id: 36, location_name: `Çanakkale`, receiver_location: `Boğazhisar`, lat: 40.1490, long: 26.4050 },
      { location_id: 43, decree_id: 37, location_name: `Izmir`, receiver_location: `Tire`, lat: 38.0892, long: 27.7344 },
      { location_id: 44, decree_id: 38, location_name: `Istanbul`, receiver_location: `Üsküdar`, lat: 41.0267, long: 29.0163 },
      { location_id: 45, decree_id: 39, location_name: `Edirne`, receiver_location: `Edirne`, lat: 41.6772, long: 26.5557 },
      { location_id: 46, decree_id: 40, location_name: `Edirne`, receiver_location: `Edirne`, lat: 41.6772, long: 26.5557 },
      { location_id: 47, decree_id: 41, location_name: `İzmir`, receiver_location: `İzmir`, lat: 38.4237, long: 27.1428 },
      { location_id: 48, decree_id: 42, location_name: `Eskişehir`, receiver_location: `Eskişehir`, lat: 39.7767, long: 30.5206 },
      { location_id: 49, decree_id: 42, location_name: `Bilecik`, receiver_location: `Bilecik`, lat: 40.1425, long: 29.9792 },
      { location_id: 50, decree_id: 43, location_name: `Konya`, receiver_location: `Seydişehir`, lat: 37.4186, long: 31.8469 },
      { location_id: 51, decree_id: 44, location_name: `Denizli`, receiver_location: `Çal`, lat: 37.9928, long: 29.4128 },
      { location_id: 52, decree_id: 44, location_name: `Kütahya`, receiver_location: `Kütahya`, lat: 39.4167, long: 29.9833 },
      { location_id: 53, decree_id: 45, location_name: `Edirne`, receiver_location: `Edirne`, lat: 41.6772, long: 26.5557 },
      { location_id: 54, decree_id: 46, location_name: `Aydın`, receiver_location: `Sultanhisar`, lat: 37.8814, long: 28.1492 },
      { location_id: 55, decree_id: 46, location_name: `Aydın`, receiver_location: `Bozdoğan`, lat: 37.5925, long: 28.3711 },
      { location_id: 56, decree_id: 46, location_name: `Aydın`, receiver_location: `Arpaz (Erbasi)`, lat: 37.8483, long: 28.3283 },
      { location_id: 57, decree_id: 46, location_name: `Aydın`, receiver_location: `Ortakçı`, lat: 37.8642, long: 28.4897 },
      { location_id: 58, decree_id: 46, location_name: `Denizli`, receiver_location: `Vakıf`, lat: 37.7500, long: 28.6000 },
      { location_id: 59, decree_id: 46, location_name: `Konya`, receiver_location: `Beyşehir`, lat: 37.6789, long: 31.7242 },
      { location_id: 60, decree_id: 46, location_name: `Denizli`, receiver_location: `Tula`, lat: 37.5833, long: 29.0667 },
      { location_id: 61, decree_id: 47, location_name: `Isparta`, receiver_location: `Hamid`, lat: 37.7644, long: 30.5564 },
      { location_id: 62, decree_id: 47, location_name: `Isparta`, receiver_location: `Hoyran`, lat: 38.1056, long: 30.5500 },
      { location_id: 63, decree_id: 48, location_name: `Serbia`, receiver_location: `Sermin`, lat: 44.9764, long: 19.6122 },
      { location_id: 64, decree_id: 48, location_name: `Hungary`, receiver_location: `Segedin`, lat: 46.2530, long: 20.1482 },
      { location_id: 65, decree_id: 48, location_name: `Bosnia and Herzegovina`, receiver_location: `İzvornik`, lat: 44.3856, long: 19.1036 },
      { location_id: 66, decree_id: 49, location_name: `Bursa`, receiver_location: `Bursa`, lat: 40.1885, long: 29.0610 },
      { location_id: 67, decree_id: 50, location_name: `Kars`, receiver_location: `Kars`, lat: 40.6013, long: 43.0975 },
      { location_id: 68, decree_id: 51, location_name: `Balıkesir`, receiver_location: `Edincik`, lat: 40.3475, long: 27.8631 },
      { location_id: 69, decree_id: 52, location_name: `Bursa`, receiver_location: `Bursa`, lat: 40.1885, long: 29.0610 },
      { location_id: 70, decree_id: 53, location_name: `Macedonia`, receiver_location: `Üsküb`, lat: 42.0000, long: 21.4333 },
      { location_id: 71, decree_id: 54, location_name: `Diyarbakır`, receiver_location: `Diyarbekir`, lat: 37.9144, long: 40.2306 },
      { location_id: 72, decree_id: 55, location_name: `Syria`, receiver_location: `Haleb`, lat: 36.2021, long: 37.1343 },
      { location_id: 73, decree_id: 56, location_name: `Syria`, receiver_location: `Rakka`, lat: 35.9500, long: 39.0167 },
      { location_id: 74, decree_id: 56, location_name: `Şanlıurfa`, receiver_location: `Birecik`, lat: 37.0294, long: 37.9786 },
      { location_id: 75, decree_id: 57, location_name: `Kuzey Makedonya (Pirlepe)`, receiver_location: `Kalkandelen`, lat: 42.0097, long: 20.9714 }
    ];

    let RECEIVER_TABLE = [
      { receiver_id: 1, decree_id: 1, receiver_title: `Vizier` },
      { receiver_id: 2, decree_id: 1, receiver_title: `Kadi` },
      { receiver_id: 3, decree_id: 1, receiver_title: `Voivode` },
      { receiver_id: 4, decree_id: 2, receiver_title: `Kadi` },
      { receiver_id: 5, decree_id: 2, receiver_title: `Kadi` },
      { receiver_id: 6, decree_id: 2, receiver_title: `Chief of Imperial Gardeners` },
      { receiver_id: 7, decree_id: 5, receiver_title: `Mullah` },
      { receiver_id: 8, decree_id: 5, receiver_title: `Kadi` },
      { receiver_id: 9, decree_id: 6, receiver_title: `Kadi` },
      { receiver_id: 10, decree_id: 7, receiver_title: `Vizier` },
      { receiver_id: 11, decree_id: 7, receiver_title: `Kadi` },
      { receiver_id: 12, decree_id: 8, receiver_title: `Beg` },
      { receiver_id: 13, decree_id: 8, receiver_title: `Kadi` },
      { receiver_id: 14, decree_id: 9, receiver_title: `Kadi` },
      { receiver_id: 15, decree_id: 10, receiver_title: `Mutasarrif` },
      { receiver_id: 16, decree_id: 11, receiver_title: `Beylerbeyi` },
      { receiver_id: 17, decree_id: 12, receiver_title: `Kadi` },
      { receiver_id: 18, decree_id: 14, receiver_title: `Beg` },
      { receiver_id: 19, decree_id: 14, receiver_title: `Kadi` },
      { receiver_id: 20, decree_id: 15, receiver_title: `Kadi` },
      { receiver_id: 21, decree_id: 16, receiver_title: `Kadi` },
      { receiver_id: 22, decree_id: 16, receiver_title: `Janissary Serdar` },
      { receiver_id: 23, decree_id: 17, receiver_title: `Kadi` },
      { receiver_id: 24, decree_id: 17, receiver_title: `Janissary Serdar` },
      { receiver_id: 25, decree_id: 18, receiver_title: `Kadi` },
      { receiver_id: 26, decree_id: 19, receiver_title: `Pasha` },
      { receiver_id: 27, decree_id: 20, receiver_title: `Beylerbeyi` },
      { receiver_id: 28, decree_id: 20, receiver_title: `Kadi` },
      { receiver_id: 29, decree_id: 21, receiver_title: `Pasha` },
      { receiver_id: 30, decree_id: 21, receiver_title: `Kadi` },
      { receiver_id: 31, decree_id: 21, receiver_title: `Defterdar` },
      { receiver_id: 32, decree_id: 22, receiver_title: `Kadi` },
      { receiver_id: 33, decree_id: 23, receiver_title: `Kadi` },
      { receiver_id: 34, decree_id: 24, receiver_title: `Pasha` },
      { receiver_id: 35, decree_id: 24, receiver_title: `Molla/Kadi` },
      { receiver_id: 36, decree_id: 25, receiver_title: `Pasha` },
      { receiver_id: 37, decree_id: 25, receiver_title: `Kadi` },
      { receiver_id: 38, decree_id: 25, receiver_title: `Former Kadi` },
      { receiver_id: 39, decree_id: 25, receiver_title: `Mevlana Abdullah` },
      { receiver_id: 40, decree_id: 27, receiver_title: `Pasha` },
      { receiver_id: 41, decree_id: 27, receiver_title: `Kadi` },
      { receiver_id: 42, decree_id: 28, receiver_title: `Kadi` },
      { receiver_id: 43, decree_id: 29, receiver_title: `Molla/Kadi` },
      { receiver_id: 44, decree_id: 29, receiver_title: `Kadi` },
      { receiver_id: 45, decree_id: 30, receiver_title: `Molla/Kadi` },
      { receiver_id: 46, decree_id: 31, receiver_title: `Molla/Kadi` },
      { receiver_id: 47, decree_id: 32, receiver_title: `Pasha` },
      { receiver_id: 48, decree_id: 32, receiver_title: `Kadi` },
      { receiver_id: 49, decree_id: 33, receiver_title: `Kadi` },
      { receiver_id: 50, decree_id: 34, receiver_title: `Kadi` },
      { receiver_id: 51, decree_id: 34, receiver_title: `Kadi` },
      { receiver_id: 52, decree_id: 34, receiver_title: `Kadi` },
      { receiver_id: 53, decree_id: 35, receiver_title: `Kadi` },
      { receiver_id: 54, decree_id: 35, receiver_title: `Kadi` },
      { receiver_id: 55, decree_id: 35, receiver_title: `Kadi` },
      { receiver_id: 56, decree_id: 35, receiver_title: `Kadi` },
      { receiver_id: 57, decree_id: 36, receiver_title: `Vizier` },
      { receiver_id: 58, decree_id: 37, receiver_title: `Molla/Kadi` },
      { receiver_id: 59, decree_id: 38, receiver_title: `Kadi` },
      { receiver_id: 60, decree_id: 39, receiver_title: `Kadi` },
      { receiver_id: 61, decree_id: 40, receiver_title: `Kadi` },
      { receiver_id: 62, decree_id: 40, receiver_title: `Bostancıbaşı` },
      { receiver_id: 63, decree_id: 41, receiver_title: `Vizier` },
      { receiver_id: 64, decree_id: 41, receiver_title: `Vizier` },
      { receiver_id: 65, decree_id: 41, receiver_title: `Kadi` },
      { receiver_id: 66, decree_id: 42, receiver_title: `Kadi` },
      { receiver_id: 67, decree_id: 42, receiver_title: `Kadi` },
      { receiver_id: 68, decree_id: 43, receiver_title: `Kadi` },
      { receiver_id: 69, decree_id: 44, receiver_title: `Pasha` },
      { receiver_id: 70, decree_id: 44, receiver_title: `Kadi` },
      { receiver_id: 71, decree_id: 45, receiver_title: `Kadi` },
      { receiver_id: 72, decree_id: 45, receiver_title: `Bostancıbaşı` },
      { receiver_id: 73, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 74, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 75, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 76, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 77, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 78, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 79, decree_id: 46, receiver_title: `Kadi` },
      { receiver_id: 80, decree_id: 47, receiver_title: `Sanjakbegh / Pasha` },
      { receiver_id: 81, decree_id: 47, receiver_title: `Kadi` },
      { receiver_id: 82, decree_id: 48, receiver_title: `Kadi` },
      { receiver_id: 83, decree_id: 48, receiver_title: `Kadi` },
      { receiver_id: 84, decree_id: 48, receiver_title: `Kadi` },
      { receiver_id: 85, decree_id: 49, receiver_title: `Kadi` },
      { receiver_id: 86, decree_id: 50, receiver_title: `Pasha` },
      { receiver_id: 87, decree_id: 50, receiver_title: `Kadi` },
      { receiver_id: 88, decree_id: 50, receiver_title: `Officer` },
      { receiver_id: 89, decree_id: 51, receiver_title: `Kadi` },
      { receiver_id: 90, decree_id: 52, receiver_title: `Kadi` },
      { receiver_id: 91, decree_id: 53, receiver_title: `Kadi` },
      { receiver_id: 92, decree_id: 53, receiver_title: `Sanjakbegh / Pasha` },
      { receiver_id: 93, decree_id: 54, receiver_title: `Pasha` },
      { receiver_id: 94, decree_id: 54, receiver_title: `Kadi` },
      { receiver_id: 95, decree_id: 55, receiver_title: `Pasha` },
      { receiver_id: 96, decree_id: 55, receiver_title: `Kadi` },
      { receiver_id: 97, decree_id: 56, receiver_title: `Kadi` },
      { receiver_id: 98, decree_id: 56, receiver_title: `Pasha` },
      { receiver_id: 99, decree_id: 57, receiver_title: `Kalkandelen Kadısı` },
      { receiver_id: 100, decree_id: 57, receiver_title: `Rumeli Beylerbeyisi Mustafa Paşa` }
    ];

    // =========================================================================
    // 2. FOUR NEW RELATIONAL TABLES (Keyed on decree_id)
    // =========================================================================

    // Table 4: Şikâyet Edilenler (Defendants Table)
    const DEFENDANTS_TABLE = [
      { defendant_id: 1, decree_id: 1, defendant_name: `Regional Tax Collectors & Irregular Troops`, defendant_category: `Fiscal & Tax Agents`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 2, decree_id: 2, defendant_name: `Unidentified Assailants (Edirne–Meğri Road)`, defendant_category: `Private / Criminal Suspects`, defendant_status: `Private / Civilian` },
      { defendant_id: 3, decree_id: 5, defendant_name: `Local Encroachers (Yenişehir–İzdin)`, defendant_category: `Private / Landholders`, defendant_status: `Private / Civilian` },
      { defendant_id: 4, decree_id: 6, defendant_name: `Local Officials & Harbor Patrol (Ahyolu)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 5, decree_id: 7, defendant_name: `Provincial Revenue Sub-Agent (Tripolitsa)`, defendant_category: `Fiscal & Tax Agents`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 6, decree_id: 8, defendant_name: `Defaulting Debtor (Rhodes)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 7, decree_id: 9, defendant_name: `Tımar & Revenue Interferers (Tire)`, defendant_category: `Fiscal & Tax Agents`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 8, decree_id: 10, defendant_name: `Subordinate Sancak Retainers (Aydın)`, defendant_category: `Military / Armed Retainers`, defendant_status: `Military / Armed` },
      { defendant_id: 9, decree_id: 11, defendant_name: `Provincial Governor's Tax Agents (Trabzon)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 10, decree_id: 12, defendant_name: `Harboring Parties of Fugitive Slaves`, defendant_category: `Private / Civilian`, defendant_status: `Private / Civilian` },
      { defendant_id: 11, decree_id: 14, defendant_name: `Millers / Neighboring Cultivators (Eskişehir)`, defendant_category: `Private / Landholders`, defendant_status: `Private / Civilian` },
      { defendant_id: 12, decree_id: 15, defendant_name: `External Nomadic & Non-Local Herders`, defendant_category: `Private / Pastoralists`, defendant_status: `Private / Civilian` },
      { defendant_id: 13, decree_id: 16, defendant_name: `Waqf Trustee (Mütevelli) Bekir`, defendant_category: `Waqf & Fiscal Trustees`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 14, decree_id: 17, defendant_name: `Janissaries Sefer and Piyale`, defendant_category: `Military / Janissaries`, defendant_status: `Military / Armed` },
      { defendant_id: 15, decree_id: 18, defendant_name: `Legal Attorney (Vekil) & Property Buyer`, defendant_category: `Private / Legal Agents`, defendant_status: `Private / Civilian` },
      { defendant_id: 16, decree_id: 19, defendant_name: `Boğazhisar Castle Warden (Dizdar)`, defendant_category: `Military / Garrison Officers`, defendant_status: `Military / Armed` },
      { defendant_id: 17, decree_id: 20, defendant_name: `Kadi Ahmed (Gölbazarı)`, defendant_category: `Judicial / Kadi & Naib`, defendant_status: `Judicial / Kadi` },
      { defendant_id: 18, decree_id: 21, defendant_name: `Interfering Merchants & Local Tax Brokers`, defendant_category: `Fiscal & Tax Agents`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 19, decree_id: 22, defendant_name: `Market Inspector (Bazar Başı)`, defendant_category: `Municipal / Market Officials`, defendant_status: `Municipal / Guild` },
      { defendant_id: 20, decree_id: 23, defendant_name: `Rival Jurisdiction Magistrates (Hariç Reaya)`, defendant_category: `Judicial / Kadi & Naib`, defendant_status: `Judicial / Kadi` },
      { defendant_id: 21, decree_id: 24, defendant_name: `Adjacent Property Owner (İstanbul)`, defendant_category: `Private / Urban Neighbors`, defendant_status: `Private / Civilian` },
      { defendant_id: 22, decree_id: 25, defendant_name: `Ex-Husband (Boğazhisar / Çanakkale)`, defendant_category: `Private / Family Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 23, decree_id: 27, defendant_name: `Defaulting Züamâ & Tımar Holders (Rumeli)`, defendant_category: `Military / Timar Holders`, defendant_status: `Military / Armed` },
      { defendant_id: 24, decree_id: 28, defendant_name: `Local Speculators & Port Officials (Midilli)`, defendant_category: `Municipal / Market Officials`, defendant_status: `Municipal / Guild` },
      { defendant_id: 25, decree_id: 29, defendant_name: `Rival Mütesellim Claimants (Kayseri)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 26, decree_id: 30, defendant_name: `Osman Beyoğlu Ahmed (Yenişehir / Bursa)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 27, decree_id: 31, defendant_name: `Unauthorized Settlers & Tax Assessors`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 28, decree_id: 32, defendant_name: `Local Tax Obstructors (Tatarpazarı)`, defendant_category: `Fiscal & Tax Agents`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 29, decree_id: 33, defendant_name: `Co-Heirs Withholding Estate Share (Bursa)`, defendant_category: `Private / Family Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 30, decree_id: 34, defendant_name: `Delayed Provincial Provisioners (Haleb)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 31, decree_id: 35, defendant_name: `Local Revenue Withholders (Aegean Sancaks)`, defendant_category: `Fiscal & Tax Agents`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 32, decree_id: 36, defendant_name: `Port & Customs Confiscators (Boğazhisar)`, defendant_category: `Military / Naval & Port`, defendant_status: `Military / Armed` },
      { defendant_id: 33, decree_id: 37, defendant_name: `Local Armed Retainers / Ehli Örf (Tire)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 34, decree_id: 38, defendant_name: `Disputing Property Vendors (Üsküdar)`, defendant_category: `Private / Urban Sellers`, defendant_status: `Private / Civilian` },
      { defendant_id: 35, decree_id: 39, defendant_name: `Defaulting Contractor / Employer (Edirne)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 36, decree_id: 40, defendant_name: `Defaulting Paymaster / Debtors (Edirne)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 37, decree_id: 41, defendant_name: `Commercial Debtor (İzmir)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 38, decree_id: 42, defendant_name: `Unlawful Levy Collectors / Ehli Örf (Bilecik)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 39, decree_id: 43, defendant_name: `Corrupt District Administrators (Seydişehir)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 40, decree_id: 44, defendant_name: `Confiscating Local Commanders (Çal / Kütahya)`, defendant_category: `Military / Armed Retainers`, defendant_status: `Military / Armed` },
      { defendant_id: 41, decree_id: 45, defendant_name: `Withholding Estate Guardians (Edirne)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 42, decree_id: 46, defendant_name: `Rival Office Claimants (Aydın–Konya)`, defendant_category: `Military / Janissaries`, defendant_status: `Military / Armed` },
      { defendant_id: 43, decree_id: 47, defendant_name: `Extortionate Sancak Officials (Hamid–Hoyran)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 44, decree_id: 48, defendant_name: `Disputing Frontier Garrison Officers`, defendant_category: `Military / Garrison Officers`, defendant_status: `Military / Armed` },
      { defendant_id: 45, decree_id: 49, defendant_name: `Competing Waqf Trustees (Bursa)`, defendant_category: `Waqf & Fiscal Trustees`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 46, decree_id: 50, defendant_name: `Irregular Levies & Frontier Raiders (Kars)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 47, decree_id: 51, defendant_name: `Encroaching Neighbors on Waqf Land (Edincik)`, defendant_category: `Private / Landholders`, defendant_status: `Private / Civilian` },
      { defendant_id: 48, decree_id: 52, defendant_name: `Defaulting Guild/Military Buyers (Bursa)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 49, decree_id: 53, defendant_name: `Illegal Tax & Corvée Exactors (Üsküb)`, defendant_category: `Provincial / Local Officials`, defendant_status: `Provincial Admin` },
      { defendant_id: 50, decree_id: 54, defendant_name: `Insolvent Merchant / Official Debtor (Diyarbekir)`, defendant_category: `Private / Debtors`, defendant_status: `Private / Civilian` },
      { defendant_id: 51, decree_id: 55, defendant_name: `Usurpers of Waqf Real Estate (Haleb)`, defendant_category: `Waqf & Fiscal Trustees`, defendant_status: `Fiscal / Waqf` },
      { defendant_id: 52, decree_id: 56, defendant_name: `Defaulting Sub-Commanders (Rakka–Birecik)`, defendant_category: `Military / Garrison Officers`, defendant_status: `Military / Armed` }
    ];

    // Table 5: Parasal Miktarlar / Guruş-Akçe (Financial Claims Table)
    const FINANCIAL_CLAIMS_TABLE = [
      { claim_id: 1, decree_id: 1, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Taxation / Desolation Relief`, quantification: `Unquantified in Summary` },
      { claim_id: 2, decree_id: 2, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Criminal / Blood-Money (Diyet) Eligible`, quantification: `Unquantified in Summary` },
      { claim_id: 3, decree_id: 5, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Land Boundary / Rent`, quantification: `Unquantified in Summary` },
      { claim_id: 4, decree_id: 6, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Harassment / Illegal Exaction`, quantification: `Unquantified in Summary` },
      { claim_id: 5, decree_id: 7, amount_gurus: 1850, amount_akce: 0, normalized_gurus: 1850, claim_type: `Embezzlement / Provincial Treasury`, quantification: `Archival Estimate (Vizierial Audit)` },
      { claim_id: 6, decree_id: 8, amount_gurus: 320, amount_akce: 0, normalized_gurus: 320, claim_type: `Commercial Debt`, quantification: `Archival Estimate (Island Ledger)` },
      { claim_id: 7, decree_id: 9, amount_gurus: 1400, amount_akce: 0, normalized_gurus: 1400, claim_type: `Fiscal Revenue Dispute`, quantification: `Archival Estimate (Hass Income)` },
      { claim_id: 8, decree_id: 10, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Administrative Misconduct`, quantification: `Unquantified in Summary` },
      { claim_id: 9, decree_id: 11, amount_gurus: 480, amount_akce: 0, normalized_gurus: 480, claim_type: `Illegal Taxation (Tekâlif-i Şâkka)`, quantification: `Archival Estimate (Kaza Assessment)` },
      { claim_id: 10, decree_id: 12, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Property / Fugitive Restitution`, quantification: `Unquantified in Summary` },
      { claim_id: 11, decree_id: 14, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Waqf Water Rights`, quantification: `Unquantified in Summary` },
      { claim_id: 12, decree_id: 15, amount_gurus: 0, amount_akce: 2400, normalized_gurus: 30, claim_type: `Customary Pasturage Fee (Otlak Resmi)`, quantification: `Archival Estimate (Per-Flock Rate)` },
      { claim_id: 13, decree_id: 16, amount_gurus: 450, amount_akce: 0, normalized_gurus: 450, claim_type: `Waqf Extortion & Over-Assessment`, quantification: `Archival Estimate (Waqf Register)` },
      { claim_id: 14, decree_id: 17, amount_gurus: 600, amount_akce: 0, normalized_gurus: 600, claim_type: `Waqf Cash Fund Debt (Nukûd-ı Mevkufe)`, quantification: `Archival Estimate (Waqf Loan)` },
      { claim_id: 15, decree_id: 18, amount_gurus: 750, amount_akce: 0, normalized_gurus: 750, claim_type: `Fraudulent Real Estate Sale`, quantification: `Archival Estimate (Mülk Valuation)` },
      { claim_id: 16, decree_id: 19, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Unlawful Imprisonment`, quantification: `Non-Monetary` },
      { claim_id: 17, decree_id: 20, amount_gurus: 920, amount_akce: 0, normalized_gurus: 920, claim_type: `Judicial Extortion & Illegal Fees`, quantification: `Archival Estimate (Kaza Grievance)` },
      { claim_id: 18, decree_id: 21, amount_gurus: 0, amount_akce: 4, normalized_gurus: 0.05, claim_type: `Customs Fee (4 Akçe / Unit)`, quantification: `Explicit in Decree Text (Unit Rate)` },
      { claim_id: 19, decree_id: 22, amount_gurus: 180, amount_akce: 0, normalized_gurus: 180, claim_type: `Market Inspector Extortion`, quantification: `Archival Estimate (Guild Levy)` },
      { claim_id: 20, decree_id: 23, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Jurisdictional Fee Dispute`, quantification: `Unquantified in Summary` },
      { claim_id: 21, decree_id: 24, amount_gurus: 260, amount_akce: 0, normalized_gurus: 260, claim_type: `Property Damage & Repair Extortion`, quantification: `Archival Estimate (Urban Assessment)` },
      { claim_id: 22, decree_id: 25, amount_gurus: 150, amount_akce: 0, normalized_gurus: 150, claim_type: `Unpaid Mahr (Mehr-i Müeccel) & Chattels`, quantification: `Archival Estimate (Sharia Court Claim)` },
      { claim_id: 23, decree_id: 27, amount_gurus: 6330, amount_akce: 0, normalized_gurus: 6330, claim_type: `Campaign Expenses & Loans`, quantification: `Explicit in Decree Text` },
      { claim_id: 24, decree_id: 28, amount_gurus: 1200, amount_akce: 0, normalized_gurus: 1200, claim_type: `Official-Rate Maritime Soap Trade`, quantification: `Archival Estimate (3-Ship Cargo)` },
      { claim_id: 25, decree_id: 29, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Office Appointment (Temessük)`, quantification: `Non-Monetary` },
      { claim_id: 26, decree_id: 30, amount_gurus: 2200, amount_akce: 0, normalized_gurus: 2200, claim_type: `Contractual Debt Default`, quantification: `Explicit in Decree Text` },
      { claim_id: 27, decree_id: 31, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Resettlement & Tax Exemption`, quantification: `Unquantified in Summary` },
      { claim_id: 28, decree_id: 32, amount_gurus: 540, amount_akce: 0, normalized_gurus: 540, claim_type: `Tax Obstruction`, quantification: `Archival Estimate (Kaza Arrears)` },
      { claim_id: 29, decree_id: 33, amount_gurus: 380, amount_akce: 0, normalized_gurus: 380, claim_type: `Inheritance Share (Tereke)`, quantification: `Archival Estimate (Estate Division)` },
      { claim_id: 30, decree_id: 34, amount_gurus: 3100, amount_akce: 0, normalized_gurus: 3100, claim_type: `Military Provisioning (Nüzül / Sürsat)`, quantification: `Archival Estimate (Provincial Supply)` },
      { claim_id: 31, decree_id: 35, amount_gurus: 890, amount_akce: 0, normalized_gurus: 890, claim_type: `Multi-Sancak Revenue Collection`, quantification: `Archival Estimate (Mukataa Arrears)` },
      { claim_id: 32, decree_id: 36, amount_gurus: 640, amount_akce: 0, normalized_gurus: 640, claim_type: `Unlawful Confiscation`, quantification: `Archival Estimate (Naval Inventory)` },
      { claim_id: 33, decree_id: 37, amount_gurus: 720, amount_akce: 0, normalized_gurus: 720, claim_type: `Extortion (Cerîme / Salgın)`, quantification: `Archival Estimate (Town Grievance)` },
      { claim_id: 34, decree_id: 38, amount_gurus: 1500, amount_akce: 0, normalized_gurus: 1500, claim_type: `Vizierial Property Purchase`, quantification: `Archival Estimate (Üsküdar Estate)` },
      { claim_id: 35, decree_id: 39, amount_gurus: 210, amount_akce: 0, normalized_gurus: 210, claim_type: `Artisan Wage / Nonpayment`, quantification: `Archival Estimate (Craft Claim)` },
      { claim_id: 36, decree_id: 40, amount_gurus: 195, amount_akce: 0, normalized_gurus: 195, claim_type: `Artisan Wage / Nonpayment`, quantification: `Archival Estimate (Craft Claim)` },
      { claim_id: 37, decree_id: 41, amount_gurus: 410, amount_akce: 0, normalized_gurus: 410, claim_type: `Commercial Debt Dispute`, quantification: `Archival Estimate (Port Trade)` },
      { claim_id: 38, decree_id: 42, amount_gurus: 520, amount_akce: 0, normalized_gurus: 520, claim_type: `Extortion from Town & Naib`, quantification: `Archival Estimate (Kaza Grievance)` },
      { claim_id: 39, decree_id: 43, amount_gurus: 490, amount_akce: 0, normalized_gurus: 490, claim_type: `Extortion from Subjects`, quantification: `Archival Estimate (Kaza Grievance)` },
      { claim_id: 40, decree_id: 44, amount_gurus: 680, amount_akce: 0, normalized_gurus: 680, claim_type: `Confiscation of Kadis' Property`, quantification: `Archival Estimate (Official Claim)` },
      { claim_id: 41, decree_id: 45, amount_gurus: 240, amount_akce: 0, normalized_gurus: 240, claim_type: `Nonpayment to Legal Guardian`, quantification: `Archival Estimate (Guardianship)` },
      { claim_id: 42, decree_id: 46, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Appointment / Office Confirmation`, quantification: `Non-Monetary` },
      { claim_id: 43, decree_id: 47, amount_gurus: 560, amount_akce: 0, normalized_gurus: 560, claim_type: `Extortion (Hamid–Hoyran)`, quantification: `Archival Estimate (Kaza Grievance)` },
      { claim_id: 44, decree_id: 48, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Frontier Appointment`, quantification: `Non-Monetary` },
      { claim_id: 45, decree_id: 49, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Waqf Trustee Appointment`, quantification: `Non-Monetary` },
      { claim_id: 46, decree_id: 50, amount_gurus: 0, amount_akce: 0, normalized_gurus: 0, claim_type: `Resettlement & Tax Relief`, quantification: `Unquantified in Summary` },
      { claim_id: 47, decree_id: 51, amount_gurus: 0, amount_akce: 1200, normalized_gurus: 15, claim_type: `Mosque Endowment Property`, quantification: `Archival Estimate (Waqf Stipend)` },
      { claim_id: 48, decree_id: 52, amount_gurus: 165, amount_akce: 0, normalized_gurus: 165, claim_type: `Artisan Debt (Shield-maker)`, quantification: `Archival Estimate (Craft Claim)` },
      { claim_id: 49, decree_id: 53, amount_gurus: 430, amount_akce: 0, normalized_gurus: 430, claim_type: `Village Extortion (Rahova)`, quantification: `Archival Estimate (Village Grievance)` },
      { claim_id: 50, decree_id: 54, amount_gurus: 1120, amount_akce: 0, normalized_gurus: 1120, claim_type: `Collective Creditors' Claim`, quantification: `Archival Estimate (Merchant Debt)` },
      { claim_id: 51, decree_id: 55, amount_gurus: 0, amount_akce: 3600, normalized_gurus: 45, claim_type: `Waqf Stipend & Property`, quantification: `Archival Estimate (Annual Stipend)` },
      { claim_id: 52, decree_id: 56, amount_gurus: 470, amount_akce: 0, normalized_gurus: 470, claim_type: `Commander's Debt Claim`, quantification: `Archival Estimate (Garrison Debt)` }
    ];

    // Table 6: Eyalet-Sancak-Kaza-Karye (Administrative Hierarchy Table — grounded in Sözlük)
    const ADMIN_HIERARCHY_TABLE = [
      { hier_id: 1, decree_id: 1, eyalet: `Haleb Eyaleti`, sancak: `Haleb / Kilis / Azez`, kaza: `Haleb & Kilis`, karye_or_nefs: `Nefs-i Haleb, Kilis, Azez` },
      { hier_id: 2, decree_id: 2, eyalet: `Rumeli Eyaleti`, sancak: `Paşa / Çirmen`, kaza: `Edirne & Meğri`, karye_or_nefs: `Mahruse-i Edirne, Meğri` },
      { hier_id: 3, decree_id: 5, eyalet: `Rumeli Eyaleti`, sancak: `Tırhala / Eğriboz`, kaza: `Yenişehir-i Fenar & İzdin`, karye_or_nefs: `Yenişehir, İzdin` },
      { hier_id: 4, decree_id: 6, eyalet: `Rumeli Eyaleti`, sancak: `Silistre`, kaza: `Ahyolu`, karye_or_nefs: `Nefs-i Ahyolu` },
      { hier_id: 5, decree_id: 7, eyalet: `Mora / Rumeli Eyaleti`, sancak: `Mora`, kaza: `Tripoliçe`, karye_or_nefs: `Nefs-i Tripoliçe` },
      { hier_id: 6, decree_id: 8, eyalet: `Cezayir-i Bahr-i Sefid`, sancak: `Rodos`, kaza: `Rodos`, karye_or_nefs: `Cezire-i Rodos` },
      { hier_id: 7, decree_id: 9, eyalet: `Anadolu Eyaleti`, sancak: `Aydın`, kaza: `Tire`, karye_or_nefs: `Nefs-i Tire` },
      { hier_id: 8, decree_id: 10, eyalet: `Anadolu Eyaleti`, sancak: `Aydın`, kaza: `Güzelhisar-ı Aydın`, karye_or_nefs: `Nefs-i Aydın` },
      { hier_id: 9, decree_id: 11, eyalet: `Trabzon Eyaleti`, sancak: `Trabzon`, kaza: `Trabzon`, karye_or_nefs: `Nefs-i Trabzon` },
      { hier_id: 10, decree_id: 12, eyalet: `Anadolu Eyaleti`, sancak: `Karahisar-ı Sahib`, kaza: `Karahisar`, karye_or_nefs: `Nefs-i Karahisar` },
      { hier_id: 11, decree_id: 14, eyalet: `Anadolu Eyaleti`, sancak: `Sultanönü`, kaza: `Eskişehir`, karye_or_nefs: `Nefs-i Eskişehir` },
      { hier_id: 12, decree_id: 15, eyalet: `Karaman Eyaleti`, sancak: `Aksaray`, kaza: `Aksaray`, karye_or_nefs: `Nefs-i Aksaray` },
      { hier_id: 13, decree_id: 16, eyalet: `Karaman Eyaleti`, sancak: `Konya`, kaza: `Karapınar (Sultaniye)`, karye_or_nefs: `Karapınar Evkafı` },
      { hier_id: 14, decree_id: 17, eyalet: `Karaman Eyaleti`, sancak: `Konya`, kaza: `Karapınar (Sultaniye)`, karye_or_nefs: `Karapınar` },
      { hier_id: 15, decree_id: 18, eyalet: `Anadolu Eyaleti`, sancak: `Kocaeli`, kaza: `İznikmid`, karye_or_nefs: `Nefs-i İznikmid` },
      { hier_id: 16, decree_id: 19, eyalet: `Cezayir-i Bahr-i Sefid`, sancak: `Biga / Gelibolu`, kaza: `Boğazhisar`, karye_or_nefs: `Kale-i Boğazhisar` },
      { hier_id: 17, decree_id: 20, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar / Kütahya`, kaza: `Gölbazarı`, karye_or_nefs: `Nefs-i Gölbazarı` },
      { hier_id: 18, decree_id: 21, eyalet: `Bağdad Eyaleti`, sancak: `Bağdad (Paşa Sancağı)`, kaza: `Bağdad`, karye_or_nefs: `Mahrusa-i Bağdad` },
      { hier_id: 19, decree_id: 22, eyalet: `İstanbul / Haslar`, sancak: `Haslar`, kaza: `Çekmece`, karye_or_nefs: `Çekmece Çarşısı` },
      { hier_id: 20, decree_id: 23, eyalet: `Rumeli Eyaleti`, sancak: `Edirne / Paşa`, kaza: `Havas-ı Mahmud Paşa`, karye_or_nefs: `Nefs-i Havsa` },
      { hier_id: 21, decree_id: 24, eyalet: `İstanbul / Haslar`, sancak: `Dersaadet`, kaza: `Mahrusa-i İstanbul`, karye_or_nefs: `Asitane-i Saadet` },
      { hier_id: 22, decree_id: 25, eyalet: `Cezayir-i Bahr-i Sefid`, sancak: `Biga / Gelibolu`, kaza: `Boğazhisar`, karye_or_nefs: `Boğazhisar` },
      { hier_id: 23, decree_id: 27, eyalet: `Rumeli Eyaleti`, sancak: `Sofya (Paşa Sancağı)`, kaza: `Sofya`, karye_or_nefs: `Nefs-i Sofya` },
      { hier_id: 24, decree_id: 28, eyalet: `Cezayir-i Bahr-i Sefid`, sancak: `Midilli`, kaza: `Midilli`, karye_or_nefs: `Cezire-i Midilli` },
      { hier_id: 25, decree_id: 29, eyalet: `Karaman Eyaleti`, sancak: `Kayseri`, kaza: `Kayseri`, karye_or_nefs: `Nefs-i Kayseri` },
      { hier_id: 26, decree_id: 30, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar`, kaza: `Bursa`, karye_or_nefs: `Nefs-i Bursa` },
      { hier_id: 27, decree_id: 31, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar`, kaza: `Mihaliç`, karye_or_nefs: `Yorgi Kalesi` },
      { hier_id: 28, decree_id: 32, eyalet: `Rumeli Eyaleti`, sancak: `Paşa / Filibe`, kaza: `Tatarpazarı`, karye_or_nefs: `Nefs-i Tatarpazarı` },
      { hier_id: 29, decree_id: 33, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar`, kaza: `Bursa`, karye_or_nefs: `Nefs-i Bursa` },
      { hier_id: 30, decree_id: 34, eyalet: `Haleb Eyaleti`, sancak: `Haleb / Kilis / Azez`, kaza: `Haleb, Kilis, Azez`, karye_or_nefs: `Nefs-i Haleb` },
      { hier_id: 31, decree_id: 35, eyalet: `Anadolu Eyaleti`, sancak: `Saruhan / Kütahya / Aydın`, kaza: `Menemen, Manisa, Kütahya, Güzelhisar`, karye_or_nefs: `Multi-Kaza Circuit` },
      { hier_id: 32, decree_id: 36, eyalet: `Cezayir-i Bahr-i Sefid`, sancak: `Biga / Gelibolu`, kaza: `Boğazhisar`, karye_or_nefs: `Boğazhisar İskelesi` },
      { hier_id: 33, decree_id: 37, eyalet: `Anadolu Eyaleti`, sancak: `Aydın`, kaza: `Tire`, karye_or_nefs: `Nefs-i Tire` },
      { hier_id: 34, decree_id: 38, eyalet: `İstanbul / Haslar`, sancak: `Üsküdar`, kaza: `Üsküdar`, karye_or_nefs: `Nefs-i Üsküdar` },
      { hier_id: 35, decree_id: 39, eyalet: `Rumeli Eyaleti`, sancak: `Paşa`, kaza: `Edirne`, karye_or_nefs: `Mahruse-i Edirne` },
      { hier_id: 36, decree_id: 40, eyalet: `Rumeli Eyaleti`, sancak: `Paşa`, kaza: `Edirne`, karye_or_nefs: `Mahruse-i Edirne` },
      { hier_id: 37, decree_id: 41, eyalet: `Anadolu Eyaleti`, sancak: `Suğla / İzmir`, kaza: `İzmir`, karye_or_nefs: `Nefs-i İzmir` },
      { hier_id: 38, decree_id: 42, eyalet: `Anadolu Eyaleti`, sancak: `Sultanönü / Hüdavendigar`, kaza: `Eskişehir & Bilecik`, karye_or_nefs: `Bilecik & Eskişehir` },
      { hier_id: 39, decree_id: 43, eyalet: `Karaman Eyaleti`, sancak: `Konya`, kaza: `Seydişehir`, karye_or_nefs: `Nefs-i Seydişehir` },
      { hier_id: 40, decree_id: 44, eyalet: `Anadolu Eyaleti`, sancak: `Kütahya`, kaza: `Çal & Kütahya`, karye_or_nefs: `Çal, Kütahya` },
      { hier_id: 41, decree_id: 45, eyalet: `Rumeli Eyaleti`, sancak: `Paşa`, kaza: `Edirne`, karye_or_nefs: `Mahruse-i Edirne` },
      { hier_id: 42, decree_id: 46, eyalet: `Anadolu Eyaleti`, sancak: `Aydın & Hamid & Konya`, kaza: `Sultanhisar, Bozdoğan, Beyşehir…`, karye_or_nefs: `7 Connected Settlements` },
      { hier_id: 43, decree_id: 47, eyalet: `Anadolu Eyaleti`, sancak: `Hamid`, kaza: `Isparta & Hoyran`, karye_or_nefs: `Nefs-i Hamid, Hoyran` },
      { hier_id: 44, decree_id: 48, eyalet: `Budin & Bosna Eyaletleri`, sancak: `Sirem / Segedin / İzvornik`, kaza: `Sermin, Segedin, İzvornik`, karye_or_nefs: `Danube–Drina Garrisons` },
      { hier_id: 45, decree_id: 49, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar`, kaza: `Bursa`, karye_or_nefs: `Nefs-i Bursa` },
      { hier_id: 46, decree_id: 50, eyalet: `Kars / Erzurum Eyaleti`, sancak: `Kars`, kaza: `Kars`, karye_or_nefs: `Nefs-i Kars` },
      { hier_id: 47, decree_id: 51, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar`, kaza: `Edincik`, karye_or_nefs: `Nefs-i Edincik` },
      { hier_id: 48, decree_id: 52, eyalet: `Anadolu Eyaleti`, sancak: `Hüdavendigar`, kaza: `Bursa`, karye_or_nefs: `Nefs-i Bursa` },
      { hier_id: 49, decree_id: 53, eyalet: `Rumeli Eyaleti`, sancak: `Üsküb`, kaza: `Üsküb`, karye_or_nefs: `Karye-i Rahova` },
      { hier_id: 50, decree_id: 54, eyalet: `Diyarbekir Eyaleti`, sancak: `Amid (Diyarbekir)`, kaza: `Diyarbekir`, karye_or_nefs: `Nefs-i Diyarbekir` },
      { hier_id: 51, decree_id: 55, eyalet: `Haleb Eyaleti`, sancak: `Haleb`, kaza: `Haleb`, karye_or_nefs: `Gazi Murad Pasha Waqf` },
      { hier_id: 52, decree_id: 56, eyalet: `Rakka / Haleb Eyaleti`, sancak: `Rakka & Birecik`, kaza: `Rakka & Birecik`, karye_or_nefs: `Euphrates Crossing` },
      { hier_id: 53, decree_id: 57, eyalet: `Rumeli Eyaleti`, sancak: `Paşa Sancağı`, kaza: `Pirlepe ve Kalkandelen`, karye_or_nefs: `Kaza-i Pirlepe` }
    ];

    // Table 7: Dîvân Kararları (Resolutions Table)
    const RESOLUTIONS_TABLE = [
      { resolution_id: 1, decree_id: 1, directive_type: `Men' ve İskân (Protection & Relief)`, directive_summary: `Prevent unlawful exactions in devastated Haleb–Kilis–Azez villages and secure stability.`, target_authority: `Vizier, Kadi, Voivode` },
      { resolution_id: 2, decree_id: 2, directive_type: `Şer'î İnceleme (Criminal Investigation)`, directive_summary: `Investigate homicide petition of Ayşe Hatun across Edirne and Meğri jurisdictions.`, target_authority: `Kadi & Bostancıbaşı` },
      { resolution_id: 3, decree_id: 5, directive_type: `Şer'î İnceleme (Land Adjudication)`, directive_summary: `Adjudicate land boundary claim in Yenişehir and İzdin according to Sharia and land registers.`, target_authority: `Mullah & Kadi` },
      { resolution_id: 4, decree_id: 6, directive_type: `Men' ve Def' (Prohibit Harassment)`, directive_summary: `Protect non-Muslim subject Hristo in Ahyolu from harassment and unlawful interference.`, target_authority: `Kadi of Ahyolu` },
      { resolution_id: 5, decree_id: 7, directive_type: `Tahsil ve Teftiş (Audit & Recovery)`, directive_summary: `Audit alleged embezzlement in Tripolitsa and recover state funds.`, target_authority: `Vizier & Kadi` },
      { resolution_id: 6, decree_id: 8, directive_type: `Tahsil ve İade (Debt Enforcement)`, directive_summary: `Verify Mos's claim under Sharia in Rhodes and compel repayment if proven.`, target_authority: `Beg & Kadi` },
      { resolution_id: 7, decree_id: 9, directive_type: `Tahsil ve Def' (Revenue Protection)`, directive_summary: `Resolve Kenan Pasha's revenue dispute in Tire without unauthorized interference.`, target_authority: `Kadi of Tire` },
      { resolution_id: 8, decree_id: 10, directive_type: `Teftiş (Official Misconduct Inquiry)`, directive_summary: `Examine misconduct reported by Alaybegi Halil in Aydın sancak.`, target_authority: `Mutasarrif of Aydın` },
      { resolution_id: 9, decree_id: 11, directive_type: `Men' ve Def' (Taxation Prohibition)`, directive_summary: `Halt illegal taxation reported by Kadi Abdülkerim in Trabzon.`, target_authority: `Beylerbeyi of Trabzon` },
      { resolution_id: 10, decree_id: 12, directive_type: `İade Emri (Restitution Order)`, directive_summary: `Locate and return fugitive slaves claimed by Janissary petitioner in Karahisar.`, target_authority: `Kadi of Karahisar` },
      { resolution_id: 11, decree_id: 14, directive_type: `Men' ve Def' (Waqf Protection)`, directive_summary: `Remove encroachment on waqf water channel in Eskişehir.`, target_authority: `Beg & Kadi` },
      { resolution_id: 12, decree_id: 15, directive_type: `Tahsil Emri (Customary Fee Enforcement)`, directive_summary: `Enforce customary sheep pasturage fee collection in Aksaray.`, target_authority: `Kadi of Aksaray` },
      { resolution_id: 13, decree_id: 16, directive_type: `Teftiş ve Men' (Trustee Oversight)`, directive_summary: `Investigate oppression by waqf trustee Bekir against Karapınar reaya.`, target_authority: `Kadi & Janissary Serdar` },
      { resolution_id: 14, decree_id: 17, directive_type: `Tahsil ve İade (Waqf Debt Recovery)`, directive_summary: `Compel Janissaries Sefer and Piyale to repay waqf cash loan.`, target_authority: `Kadi & Janissary Serdar` },
      { resolution_id: 15, decree_id: 18, directive_type: `İade ve İbtal (Annulment & Restitution)`, directive_summary: `Examine Mümine's claim of fraudulent underpriced sale in İznikmid and restore property.`, target_authority: `Kadi of İznikmid` },
      { resolution_id: 16, decree_id: 19, directive_type: `İhzâr ve Nakil (Transfer to Capital)`, directive_summary: `Release unlawfully imprisoned gunner from Boğazhisar and transfer to Istanbul.`, target_authority: `Pasha (Garrison Command)` },
      { resolution_id: 17, decree_id: 20, directive_type: `Teftiş ve Men' (Judicial Oversight)`, directive_summary: `Investigate extortion and illegal fees charged by Kadi Ahmed in Gölbazarı.`, target_authority: `Beylerbeyi & Kadi` },
      { resolution_id: 18, decree_id: 21, directive_type: `Teyid-i Kanun (Customs Rate Confirmation)`, directive_summary: `Authorize collection of customary 4 akçe per unit customs fee in Baghdad.`, target_authority: `Pasha, Kadi, Defterdar` },
      { resolution_id: 19, decree_id: 22, directive_type: `Men' ve Te'dib (Market Inspector Check)`, directive_summary: `Stop assault and illegal levies by market inspector against Çekmece bakers and shops.`, target_authority: `Kadi of Haslar` },
      { resolution_id: 20, decree_id: 23, directive_type: `Yetki Tayini (Jurisdictional Clarification)`, directive_summary: `Clarify judicial authority over hariç reaya cases in Havas-ı Mahmud Paşa.`, target_authority: `Kadi of Havsa` },
      { resolution_id: 21, decree_id: 24, directive_type: `Keşif ve Men' (Urban Boundary Survey)`, directive_summary: `Inspect neighbor construction, drainage damage, and fee extortion in Istanbul.`, target_authority: `Pasha & Molla/Kadi` },
      { resolution_id: 22, decree_id: 25, directive_type: `Şer'î İnceleme (Mahr & Property Recovery)`, directive_summary: `Enforce payment of Fatma Hatun's unpaid mahr and return seized chattels.`, target_authority: `Pasha, Kadi, Former Kadi` },
      { resolution_id: 23, decree_id: 27, directive_type: `Tahsil Emri (6,330 Guruş Collection)`, directive_summary: `Collect and reimburse 6,330 guruş in shared campaign loans among Rumeli timar holders.`, target_authority: `Pasha & Kadi of Sofya` },
      { resolution_id: 24, decree_id: 28, directive_type: `Sevk ve Narh (Cargo Dispatch Order)`, directive_summary: `Sell one ship of soap in Midilli at official rate and dispatch two ships to Istanbul.`, target_authority: `Kadi of Midilli` },
      { resolution_id: 25, decree_id: 29, directive_type: `Tevcih ve Teyid (Temessük Enforcement)`, directive_summary: `Enforce Ismail's mütesellim appointment in Kayseri via official temessük deed.`, target_authority: `Molla/Kadi & Kadi` },
      { resolution_id: 26, decree_id: 30, directive_type: `Tahsil ve İade (2,200 Guruş Debt)`, directive_summary: `Compel Osman Beyoğlu Ahmed to settle 2,200 guruş debt owed to Çorbacı Mustafa.`, target_authority: `Molla/Kadi of Bursa` },
      { resolution_id: 27, decree_id: 31, directive_type: `İskân Emri (Resettlement Order)`, directive_summary: `Confirm resettlement arrangements for inhabitants of Yorgi Castle near Mihaliç.`, target_authority: `Molla/Kadi` },
      { resolution_id: 28, decree_id: 32, directive_type: `Tahsil ve Te'dib (Tax Compliance)`, directive_summary: `Remove tax obstruction in Tatarpazarı and ensure imperial levy collection.`, target_authority: `Pasha & Kadi` },
      { resolution_id: 29, decree_id: 33, directive_type: `Şer'î Taksim (Inheritance Division)`, directive_summary: `Adjudicate Ali's inheritance claim in Bursa under Sharia estate rules.`, target_authority: `Kadi of Bursa` },
      { resolution_id: 30, decree_id: 34, directive_type: `Sevk-i Mühimmât (Troop Supply Order)`, directive_summary: `Expedite troop provisioning across Haleb, Kilis, and Azez for Serdar Hüseyin Paşa.`, target_authority: `Kadis of Haleb, Kilis, Azez` },
      { resolution_id: 31, decree_id: 35, directive_type: `Tahsil Emri (Revenue Collection)`, directive_summary: `Facilitate authorized revenue collection across Menemen, Manisa, Kütahya, Güzelhisar.`, target_authority: `Four Regional Kadis` },
      { resolution_id: 32, decree_id: 36, directive_type: `İade Emri (Confiscation Reversal)`, directive_summary: `Investigate confiscation claim of Ahmed Kapudan at Boğazhisar and restore property.`, target_authority: `Vizier` },
      { resolution_id: 33, decree_id: 37, directive_type: `Men' ve Def' (Prohibit Extortion)`, directive_summary: `Protect notables and jurists of Tire from unlawful exactions.`, target_authority: `Molla/Kadi of Tire` },
      { resolution_id: 34, decree_id: 38, directive_type: `Tescil ve İcrâ (Property Registration)`, directive_summary: `Finalize Vizier Mehmed Pasha's property purchase in Üsküdar legally.`, target_authority: `Kadi of Üsküdar` },
      { resolution_id: 35, decree_id: 39, directive_type: `Tahsil Emri (Wage / Debt Recovery)`, directive_summary: `Ensure payment owed to Master Mehmed in Edirne upon verification.`, target_authority: `Kadi of Edirne` },
      { resolution_id: 36, decree_id: 40, directive_type: `Tahsil Emri (Wage / Debt Recovery)`, directive_summary: `Enforce Master Mehmed's nonpayment claim with Bostancıbaşı support in Edirne.`, target_authority: `Kadi & Bostancıbaşı` },
      { resolution_id: 37, decree_id: 41, directive_type: `Tahsil Emri (Debt Adjudication)`, directive_summary: `Adjudicate Mustafa's debt dispute in İzmir port jurisdiction.`, target_authority: `Viziers & Kadi of İzmir` },
      { resolution_id: 38, decree_id: 42, directive_type: `Men' ve Def' (Prohibit Extortion)`, directive_summary: `Halt extortion suffered by Bilecik deputy judge and subjects across Eskişehir–Bilecik.`, target_authority: `Kadis of Eskişehir & Bilecik` },
      { resolution_id: 39, decree_id: 43, directive_type: `Men' ve Def' (Prohibit Extortion)`, directive_summary: `Protect Seydişehir inhabitants against unlawful local fees and extortion.`, target_authority: `Kadi of Seydişehir` },
      { resolution_id: 40, decree_id: 44, directive_type: `İade ve Teftiş (Confiscation Inquiry)`, directive_summary: `Investigate confiscation suffered by former Çal Kadi Mevlana Halil and colleagues.`, target_authority: `Pasha & Kadi` },
      { resolution_id: 41, decree_id: 45, directive_type: `Tahsil Emri (Guardianship Payment)`, directive_summary: `Recover unpaid sums claimed by legal guardian Mehmed in Edirne.`, target_authority: `Kadi & Bostancıbaşı` },
      { resolution_id: 42, decree_id: 46, directive_type: `Tevcih ve Teyid (Office Confirmation)`, directive_summary: `Confirm Janissary Mehmed's appointment across 7 Aydın–Denizli–Konya kazas.`, target_authority: `Seven Regional Kadis` },
      { resolution_id: 43, decree_id: 47, directive_type: `Men' ve Def' (Prohibit Extortion)`, directive_summary: `Check extortion reported by Hoyran Naib Mevlana Mustafa and local subjects.`, target_authority: `Sanjakbegh/Pasha & Kadi` },
      { resolution_id: 44, decree_id: 48, directive_type: `Tevcih ve Teyid (Frontier Appointment)`, directive_summary: `Enforce Janissary Hasan's appointment across Sermin, Segedin, and İzvornik.`, target_authority: `Three Frontier Kadis` },
      { resolution_id: 45, decree_id: 49, directive_type: `Tevcih ve Teyid (Trustee Appointment)`, directive_summary: `Confirm Mustafa's trustee appointment in Bursa.`, target_authority: `Kadi of Bursa` },
      { resolution_id: 46, decree_id: 50, directive_type: `İskân Emri (Province Resettlement)`, directive_summary: `Oversee resettlement and protection of Kars province subjects.`, target_authority: `Pasha, Kadi, Officer` },
      { resolution_id: 47, decree_id: 51, directive_type: `Waqf Protection (Endowment Audit)`, directive_summary: `Safeguard mosque preachers' and muezzins' endowment property in Edincik.`, target_authority: `Kadi of Edincik` },
      { resolution_id: 48, decree_id: 52, directive_type: `Tahsil Emri (Artisan Debt Recovery)`, directive_summary: `Verify and collect debt owed to shield-maker artisan in Bursa.`, target_authority: `Kadi of Bursa` },
      { resolution_id: 49, decree_id: 53, directive_type: `Men' ve Def' (Village Protection)`, directive_summary: `Stop extortion against inhabitants of Rahova village in Üsküb sancak.`, target_authority: `Kadi & Sanjakbegh/Pasha` },
      { resolution_id: 50, decree_id: 54, directive_type: `Tahsil Emri (Creditors' Settlement)`, directive_summary: `Adjudicate collective creditors' debt claims in Diyarbekir.`, target_authority: `Pasha & Kadi` },
      { resolution_id: 51, decree_id: 55, directive_type: `Waqf Protection (Stipend Enforcement)`, directive_summary: `Protect property and stipends of Gazi Murad Pasha Waqf beneficiaries in Haleb.`, target_authority: `Pasha & Kadi` },
      { resolution_id: 52, decree_id: 56, directive_type: `Tahsil Emri (Debt Enforcement)`, directive_summary: `Recover debt claimed by Commander Ramazan across Rakka and Birecik.`, target_authority: `Kadi & Pasha` }
    ];

    // =========================================================================
    // 3. STANDARDIZATION & RELATIONAL JOIN (Mirroring the Python HGIS Pipeline)
    // =========================================================================
    function standardizeComplaint(c) {
      if (!c) return `Other Civil Matters`;
      const s = String(c).trim().toLowerCase();
      if (s.includes(`extortion`) || s.includes(`oppression`) || s.includes(`harassment`) || s.includes(`imprisonment`) || s.includes(`misconduct`) || s.includes(`confiscation`) || s.includes(`homicide`)) {
        return `Extortion & Misconduct`;
      }
      if (s.includes(`debt`) || s.includes(`nonpayment`) || s.includes(`loan`) || s.includes(`mahr`)) {
        return `Debt & Financial Disputes`;
      }
      if (s.includes(`property`) || s.includes(`land`) || s.includes(`encroachment`) || s.includes(`sale`) || s.includes(`real estate`) || s.includes(`water`) || s.includes(`inheritance`)) {
        return `Property & Land Disputes`;
      }
      if (s.includes(`appointment`) || s.includes(`mutasallim`)) {
        return `Official Appointments`;
      }
      if (s.includes(`tax`) || s.includes(`revenue`) || s.includes(`fee`) || s.includes(`customs`) || s.includes(`desolation`) || s.includes(`supply`)) {
        return `Taxation & Fiscal Revenues`;
      }
      if (s.includes(`resettlement`) || s.includes(`runaway`) || s.includes(`jurisdictional`)) {
        return `Resettlement & Demographics`;
      }
      return `Other Civil Matters`;
    }

    const CATEGORY_COLORS_VAR = {
      'Extortion & Misconduct': '--data-5',
      'Debt & Financial Disputes': '--data-2',
      'Property & Land Disputes': '--data-3',
      'Taxation & Fiscal Revenues': '--data-1',
      'Official Appointments': '--data-4',
      'Resettlement & Demographics': '--data-7',
      'Other Civil Matters': '--data-6'
    };

    const MASTER_DECREES = PETITIONERS_TABLE.map(pet => {
      const locs = LOCATIONS_TABLE.filter(l => l.decree_id === pet.decree_id);
      const recs = RECEIVER_TABLE.filter(r => r.decree_id === pet.decree_id);
      const def = DEFENDANTS_TABLE.find(d => d.decree_id === pet.decree_id) || {};
      const fin = FINANCIAL_CLAIMS_TABLE.find(f => f.decree_id === pet.decree_id) || { normalized_gurus: 0, amount_gurus: 0, amount_akce: 0, claim_type: `N/A`, quantification: `Unquantified` };
      const hier = ADMIN_HIERARCHY_TABLE.find(h => h.decree_id === pet.decree_id) || { eyalet: `Other`, sancak: `N/A`, kaza: `N/A`, karye_or_nefs: `N/A` };
      const res = RESOLUTIONS_TABLE.find(r => r.decree_id === pet.decree_id) || { directive_type: `Standard`, directive_summary: `N/A`, target_authority: `N/A` };
      const uniqueReceivers = Array.from(new Set(recs.map(r => r.receiver_title)));

      return {
        ...pet,
        std_complaint: standardizeComplaint(pet.complaint_subject),
        locations: locs,
        primary_loc: locs[0] || { lat: 41.0082, long: 28.9784, receiver_location: `İstanbul`, location_name: `İstanbul` },
        receivers: uniqueReceivers,
        receiver_count: recs.length,
        defendant: def,
        financial: fin,
        hierarchy: hier,
        resolution: res
      };
    });

    // =========================================================================
    // 4. BILINGUAL UI DICTIONARY (English Primary + Rich Turkish Localization)
    // =========================================================================
    const I18N = {
      en: {
        kicker: `1 NUMARALI ŞİKÂYET DEFTERİ · H. 1059–1060 / 1649–1650 CE · 7 RELATIONAL TABLES`,
        title: `Ottoman HGIS Web Explorer (1649–1650)`,
        lede: `Spatial and relational exploration of imperial complaint decrees (Mühimme-i Şikâyet), connecting petitioners, accused officials (Şikâyet Edilenler), financial claims (Guruş–Akçe), administrative hierarchy (Eyalet–Sancak–Kaza–Karye), and Dîvân-ı Hümâyûn resolutions.`,
        langBtn: `Türkçe Arayüz`,
        themeDark: `Dark Mode`,
        themeLight: `Light Mode`,
        exportBtn: `Export CSV`,
        tabExplorer: `Spatial Map & Decrees`,
        tabAnalytics: `Analytics & Breakdown`,
        tabSchema: `7-Table Relational DB`,
        kpiDecrees: `Total Decrees · Toplam Hüküm`,
        kpiGurus: `Total Claimed Guruş · Toplam Guruş`,
        kpiAccused: `Top Accused Category · En Çok Şikâyet Edilen`,
        kpiLocations: `Active Locations · Aktif Kaza / Konum`,
        filterTitle: `Multi-Faceted Relational Filters · Çok Boyutlu Filtreleme`,
        lblSearch: `Search · Arama (ID, Name, Kaza)`,
        lblComplaint: `Complaint Type · Şikâyet Türü`,
        lblDefendant: `Defendant Status · Şikâyet Edilen`,
        lblEyalet: `Eyalet / Province · Eyalet`,
        lblRange: `Financial Range (Guruş) · Tutar Aralığı`,
        lblMinGurus: `Minimum financial amount in Guruş`,
        lblMaxGurus: `Maximum financial amount in Guruş`,
        lblReset: `Reset`,
        mapTitle: `Imperial Petition Geography · Şikâyet Coğrafyası`,
        mapAccessibleDescription: `Use the decree register or the text table below to explore map locations without using the map. Country names shown on the map are also listed in the text alternative.`,
        mapDataSummary: `View map locations and country names as text`,
        mapCountryLabels: `Modern country labels shown on the map: Syria, Türkiye, Greece, Iraq, Bulgaria, Serbia, Hungary, Bosnia and Herzegovina, and North Macedonia.`,
        mapTableCaption: `Locations represented on the map for the active filters`,
        mapTableHeaders: [`Decree`, `Modern location`, `Receiver location`, `Latitude`, `Longitude`],
        mapNoLocations: `No locations match the active filters.`,
        chartDataSummaries: [
          `View financial claims as a table`,
          `View defendant counts as a table`,
          `View decree and location counts as a table`,
          `View resolution and petitioner counts as a table`
        ],
        chartDataCaptions: [
          `Financial claims by complaint category`,
          `Decree counts by defendant status`,
          `Decrees and spatial sites by eyalet`,
          `Dîvân resolutions by petitioner group`
        ],
        chartDataHeaders: [
          [`Complaint category`, `Normalized Guruş`],
          [`Defendant status`, `Decrees`],
          [`Eyalet`, `Decrees`, `Spatial sites`],
          [`Resolution`, `Male`, `Group / Collective`, `Female`]
        ],
        chartNoData: `No data matches the active filters.`,
        heatmapOff: `Heatmap Layer: Off`,
        heatmapOn: `Heatmap Layer: On`,
        fitMap: `Fit Empire View`,
        listTitle: `Decree Register · Hüküm Listesi`,
        dossierTitle: `Decree Dossier · Hüküm Künyesi`,
        exportTable: `Export Active Table`
      },
      tr: {
        kicker: `1 NUMARALI ŞİKÂYET DEFTERİ · H. 1059–1060 / 1649–1650 M. · 7 İLİŞKİSEL TABLO`,
        title: `Osmanlı Tarihi Coğrafi Bilgi Sistemi (1649–1650)`,
        lede: `1 Numaralı Şikâyet Defteri hükümlerinin mekânsal ve ilişkisel analizi: Davacılar, şikâyet edilen görevliler, parasal miktarlar (Guruş–Akçe), idarî hiyerarşi (Eyalet–Sancak–Kaza–Karye) ve Dîvân-ı Hümâyûn kararları.`,
        langBtn: `English UI`,
        themeDark: `Gece Teması`,
        themeLight: `Gündüz Teması`,
        exportBtn: `CSV İndir`,
        tabExplorer: `Harita ve Hükümler`,
        tabAnalytics: `Analitik ve Grafikler`,
        tabSchema: `7 Tablolu Veritabanı`,
        kpiDecrees: `Toplam Hüküm Sayısı`,
        kpiGurus: `Toplam Guruş Talebi`,
        kpiAccused: `En Çok Şikâyet Edilen Grup`,
        kpiLocations: `Aktif Kaza / Konum Sayısı`,
        filterTitle: `Çok Boyutlu İlişkisel Filtreleme`,
        lblSearch: `Arama (Hüküm No, İsim, Kaza)`,
        lblComplaint: `Şikâyet Türü`,
        lblDefendant: `Şikâyet Edilen Statüsü`,
        lblEyalet: `Eyalet / Bölge`,
        lblRange: `Parasal Aralık (Guruş)`,
        lblMinGurus: `En düşük tutar (Guruş)`,
        lblMaxGurus: `En yüksek tutar (Guruş)`,
        lblReset: `Sıfırla`,
        mapTitle: `Şikâyet Coğrafyası ve Yoğunluk Haritası`,
        mapAccessibleDescription: `Harita konumlarını haritayı kullanmadan incelemek için hüküm listesini veya aşağıdaki metin tablosunu kullanın. Haritadaki ülke adları da metin açıklamasında listelenmiştir.`,
        mapDataSummary: `Harita konumlarını ve ülke adlarını metin olarak görüntüle`,
        mapCountryLabels: `Haritada gösterilen güncel ülke adları: Suriye, Türkiye, Yunanistan, Irak, Bulgaristan, Sırbistan, Macaristan, Bosna-Hersek ve Kuzey Makedonya.`,
        mapTableCaption: `Etkin filtrelere göre haritada gösterilen konumlar`,
        mapTableHeaders: [`Hüküm`, `Güncel konum`, `Alıcı konumu`, `Enlem`, `Boylam`],
        mapNoLocations: `Etkin filtrelere uygun konum bulunamadı.`,
        chartDataSummaries: [
          `Parasal talepleri tablo olarak görüntüle`,
          `Şikâyet edilen kişi sayılarını tablo olarak görüntüle`,
          `Eyalet ve konum sayılarını tablo olarak görüntüle`,
          `Karar ve davacı sayılarını tablo olarak görüntüle`
        ],
        chartDataCaptions: [
          `Şikâyet türüne göre parasal talepler`,
          `Şikâyet edilen statüsüne göre hüküm sayıları`,
          `Eyalete göre hükümler ve mekânsal konumlar`,
          `Davacı grubuna göre Dîvân kararları`
        ],
        chartDataHeaders: [
          [`Şikâyet türü`, `Normalize guruş`],
          [`Şikâyet edilen statüsü`, `Hükümler`],
          [`Eyalet`, `Hükümler`, `Mekânsal konumlar`],
          [`Karar`, `Erkek`, `Grup / Topluluk`, `Kadın`]
        ],
        chartNoData: `Etkin filtrelere uygun veri bulunamadı.`,
        heatmapOff: `Isı Haritası: Kapalı`,
        heatmapOn: `Isı Haritası: Açık`,
        fitMap: `Tüm Coğrafyaya Odaklan`,
        listTitle: `Hüküm Kayıt Listesi`,
        dossierTitle: `Seçili Hüküm İlişkisel Künyesi`,
        exportTable: `Aktif Tabloyu İndir`
      }
    };

    // =========================================================================
    // 5. APPLICATION STATE
    // =========================================================================
    const APP_STATE = {
      lang: `en`,
      theme: `light`,
      activeView: `explorer`,
      heatmapOn: false,
      selectedDecreeId: 27,
      activeSchemaTable: `defendants_table`,
      filters: {
        search: ``,
        complaint: `ALL`,
        defendant: `ALL`,
        eyalet: `ALL`,
        minGurus: ``,
        maxGurus: ``
      }
    };

    let filteredDecrees = [...MASTER_DECREES];
    let leafletMap = null;
    let worldVectorLayer = null;
    let markerGroup = null;
    let markerByDecree = new Map();
    let heatLayerInstance = null;
    let chartInstances = {};
    const MODERN_COUNTRY_LABELS = new Map([
      [`Syria`, `Syria`],
      [`Turkey`, `Türkiye`],
      [`Greece`, `Greece`],
      [`Iraq`, `Iraq`],
      [`Bulgaria`, `Bulgaria`],
      [`Serbia`, `Serbia`],
      [`Hungary`, `Hungary`],
      [`Bosnia and Herz.`, `Bosnia and Herzegovina`],
      [`Macedonia`, `North Macedonia`]
    ]);

    // =========================================================================
    // 6. TOKEN & COLOR HELPERS (Read live from :root / [data-theme])
    // =========================================================================
    function getToken(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }

    function getCategoryColor(stdCat) {
      const varName = CATEGORY_COLORS_VAR[stdCat] || `--data-1`;
      return getToken(varName) || `currentColor`;
    }

    // =========================================================================
    // 7. CUSTOM LEAFLET CANVAS HEATMAP LAYER (Zero external plugin needed)
    // =========================================================================
    const CanvasHeatLayer = L.Layer.extend({
      initialize: function (points) {
        this._points = points || [];
      },
      setPoints: function (points) {
        this._points = points || [];
        this._redraw();
      },
      onAdd: function (map) {
        this._map = map;
        this._canvas = L.DomUtil.create(`canvas`, `leaflet-heatmap-layer`);
        this._canvas.style.position = `absolute`;
        this._canvas.style.pointerEvents = `none`;
        this._canvas.style.zIndex = `350`;
        map.getPanes().overlayPane.appendChild(this._canvas);
        map.on(`moveend zoomend resize`, this._redraw, this);
        this._redraw();
      },
      onRemove: function (map) {
        if (this._canvas && this._canvas.parentNode) {
          this._canvas.parentNode.removeChild(this._canvas);
        }
        map.off(`moveend zoomend resize`, this._redraw, this);
      },
      _redraw: function () {
        if (!this._map || !this._canvas) return;
        const size = this._map.getSize();
        const topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
        this._canvas.width = size.x;
        this._canvas.height = size.y;

        const ctx = this._canvas.getContext(`2d`);
        ctx.clearRect(0, 0, size.x, size.y);
        if (!this._points.length) return;

        const heatCore = getToken(`--error`);
        const heatHalo = getToken(`--outline`);
        const zoom = this._map.getZoom();
        const radius = Math.max(24, Math.min(54, zoom * 6.5));

        this._points.forEach(pt => {
          const cp = this._map.latLngToContainerPoint([pt.lat, pt.lng]);
          if (cp.x < -radius || cp.y < -radius || cp.x > size.x + radius || cp.y > size.y + radius) return;
          const weight = Math.min(1, Math.max(0.32, pt.weight || 0.45));
          const grad = ctx.createRadialGradient(cp.x, cp.y, 0, cp.x, cp.y, radius);
          ctx.save();
          ctx.globalAlpha = 0.55 * weight;
          grad.addColorStop(0, heatCore);
          grad.addColorStop(0.55, heatHalo);
          grad.addColorStop(1, `transparent`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(cp.x, cp.y, radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      }
    });

    // =========================================================================
    // 8. INITIALIZATION & VECTOR MAP SETUP
    // =========================================================================
    function initMap() {
      const mapEl = document.getElementById(`ottoman-map`);
      if (!mapEl) return;

      leafletMap = L.map(`ottoman-map`, {
        center: [39.2, 31.8],
        zoom: 5,
        minZoom: 3,
        maxZoom: 8,
        scrollWheelZoom: false
      });

      leafletMap.attributionControl.addAttribution(`Boundaries: Natural Earth 50m (public domain) · Source: BOA 1 Numaralı Şikâyet Defteri`);

      markerGroup = L.layerGroup().addTo(leafletMap);
      heatLayerInstance = new CanvasHeatLayer([]);

      const istanbulCoords = [41.0082, 28.9784];
      const destinations = new Map();
      LOCATIONS_TABLE.forEach(location => {
        if (
          location.lat === null || location.lat === undefined || location.lat === `` ||
          location.long === null || location.long === undefined || location.long === ``
        ) return;

        const lat = Number(location.lat);
        const lng = Number(location.long);
        if (
          !Number.isFinite(lat) || lat < -90 || lat > 90 ||
          !Number.isFinite(lng) || lng < -180 || lng > 180
        ) return;

        const key = `${lat.toFixed(5)},${lng.toFixed(5)}`;
        if (key === `${istanbulCoords[0].toFixed(5)},${istanbulCoords[1].toFixed(5)}`) return;

        if (!destinations.has(key)) {
          destinations.set(key, {
            lat,
            lng,
            names: new Set(),
            decreeIds: new Set()
          });
        }

        const destination = destinations.get(key);
        [location.location_name, location.receiver_location]
          .filter(Boolean)
          .forEach(name => destination.names.add(name));
        if (location.decree_id !== null && location.decree_id !== undefined) {
          destination.decreeIds.add(location.decree_id);
        }
      });

      const courierLayerGroup = L.layerGroup();
      destinations.forEach(destination => {
        const popup = document.createElement(`div`);
        const title = document.createElement(`strong`);
        title.textContent = `Istanbul → ${Array.from(destination.names).join(` / `)}`;
        popup.appendChild(title);

        const details = document.createElement(`div`);
        const decreeIds = Array.from(destination.decreeIds).sort((a, b) => a - b);
        details.textContent = `Straight-line connection · Decree(s): ${decreeIds.join(`, `)}`;
        popup.appendChild(details);

        L.polyline([istanbulCoords, [destination.lat, destination.lng]], {
          color: `#f59e0b`,
          weight: 1.5,
          opacity: 0.45,
          dashArray: `4, 6`
        })
          .bindPopup(popup)
          .addTo(courierLayerGroup);
      });
      courierLayerGroup.addTo(leafletMap);

      fetch(`https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json`)
        .then(r => r.json())
        .then(topo => {
          const geo = topojson.feature(topo, topo.objects.countries);
          worldVectorLayer = L.geoJSON(geo, {
            style: function () {
              return {
                fillColor: getToken(`--map-land`),
                fillOpacity: 1,
                color: getToken(`--map-border`),
                weight: 0.75
              };
            },
            onEachFeature: function (feature, layer) {
              const countryName = MODERN_COUNTRY_LABELS.get(feature.properties?.name);
              if (!countryName) return;

              layer.bindTooltip(countryName, {
                permanent: false,
                sticky: true,
                direction: `top`,
                className: `country-name-label`
              });
            }
          }).addTo(leafletMap);
          worldVectorLayer.bringToBack();
          renderMapMarkers();
          leafletMap.invalidateSize();
        })
        .catch(() => {
          renderMapMarkers();
        });
    }

    function updateMapThemeStyles() {
      if (worldVectorLayer) {
        worldVectorLayer.setStyle({
          fillColor: getToken(`--map-land`),
          fillOpacity: 1,
          color: getToken(`--map-border`),
          weight: 0.75
        });
      }
      renderMapMarkers();
      if (APP_STATE.heatmapOn && heatLayerInstance) {
        heatLayerInstance._redraw();
      }
    }

    function populateFilterOptions() {
      const compSel = document.getElementById(`filter-complaint`);
      const defSel = document.getElementById(`filter-defendant`);
      const eyaletSel = document.getElementById(`filter-eyalet`);

      const complaints = Array.from(new Set(MASTER_DECREES.map(d => d.std_complaint))).sort();
      const defendants = Array.from(new Set(MASTER_DECREES.map(d => d.defendant.defendant_status))).sort();
      const eyalets = Array.from(new Set(MASTER_DECREES.map(d => d.hierarchy.eyalet))).sort();

      if (compSel) {
        complaints.forEach(c => {
          const opt = document.createElement(`option`);
          opt.value = c;
          opt.textContent = c;
          compSel.appendChild(opt);
        });
      }
      if (defSel) {
        defendants.forEach(d => {
          const opt = document.createElement(`option`);
          opt.value = d;
          opt.textContent = d;
          defSel.appendChild(opt);
        });
      }
      if (eyaletSel) {
        eyalets.forEach(e => {
          const opt = document.createElement(`option`);
          opt.value = e;
          opt.textContent = e;
          eyaletSel.appendChild(opt);
        });
      }
    }

    function renderLegend() {
      const legendEl = document.getElementById(`map-legend`);
      if (!legendEl) return;
      const cats = Object.keys(CATEGORY_COLORS_VAR);
      legendEl.innerHTML = cats.map(cat => {
        const varName = CATEGORY_COLORS_VAR[cat] || `--data-1`;
        return `<span class="legend-item"><span class="legend-swatch" style="background:var(${varName});"></span><span>${cat}</span></span>`;
      }).join(``);
    }

    // =========================================================================
    // 9. FILTERING & KPI COMPUTATION
    // =========================================================================
    function applyFilters(skipSave) {
      const searchEl = document.getElementById(`filter-search`);
      const compEl = document.getElementById(`filter-complaint`);
      const defEl = document.getElementById(`filter-defendant`);
      const eyaletEl = document.getElementById(`filter-eyalet`);
      const minEl = document.getElementById(`filter-min-gurus`);
      const maxEl = document.getElementById(`filter-max-gurus`);

      APP_STATE.filters.search = searchEl ? searchEl.value.trim().toLowerCase() : ``;
      APP_STATE.filters.complaint = compEl ? compEl.value : `ALL`;
      APP_STATE.filters.defendant = defEl ? defEl.value : `ALL`;
      APP_STATE.filters.eyalet = eyaletEl ? eyaletEl.value : `ALL`;
      APP_STATE.filters.minGurus = minEl ? minEl.value : ``;
      APP_STATE.filters.maxGurus = maxEl ? maxEl.value : ``;

      const minG = APP_STATE.filters.minGurus !== `` ? Number(APP_STATE.filters.minGurus) : null;
      const maxG = APP_STATE.filters.maxGurus !== `` ? Number(APP_STATE.filters.maxGurus) : null;

      filteredDecrees = MASTER_DECREES.filter(d => {
        if (APP_STATE.filters.complaint !== `ALL` && d.std_complaint !== APP_STATE.filters.complaint) return false;
        if (APP_STATE.filters.defendant !== `ALL` && d.defendant.defendant_status !== APP_STATE.filters.defendant) return false;
        if (APP_STATE.filters.eyalet !== `ALL` && d.hierarchy.eyalet !== APP_STATE.filters.eyalet) return false;
        if (minG !== null && d.financial.normalized_gurus < minG) return false;
        if (maxG !== null && d.financial.normalized_gurus > maxG) return false;

        if (APP_STATE.filters.search) {
          const q = APP_STATE.filters.search;
          const haystack = [
            String(d.decree_id),
            d.petitioner_name,
            d.petitioner_title,
            d.complaint_subject,
            d.defendant.defendant_name,
            d.defendant.defendant_category,
            d.hierarchy.eyalet,
            d.hierarchy.sancak,
            d.hierarchy.kaza,
            d.resolution.directive_type,
            d.locations.map(l => `${l.location_name} ${l.receiver_location}`).join(` `)
          ].join(` `).toLowerCase();
          if (!haystack.includes(q)) return false;
        }
        return true;
      });

      if (!filteredDecrees.some(d => d.decree_id === APP_STATE.selectedDecreeId)) {
        APP_STATE.selectedDecreeId = filteredDecrees.length ? filteredDecrees[0].decree_id : null;
      }

      updateKpis();
      renderDecreeList();
      renderSelectedDossier();
      renderMapMarkers();
      renderAccessibleMapData();
      if (APP_STATE.activeView === `analytics`) {
        renderAnalyticsCharts();
      }
      if (APP_STATE.activeView === `schema`) {
        renderSchemaTable();
      }

      const statusEl = document.getElementById(`filter-status-text`);
      if (statusEl) {
        statusEl.textContent = APP_STATE.lang === `tr`
          ? `${MASTER_DECREES.length} hükümden ${filteredDecrees.length} tanesi gösteriliyor`
          : `Showing ${filteredDecrees.length} of ${MASTER_DECREES.length} decrees`;
      }

      if (!skipSave) saveAppState();
    }

    function resetFilters() {
      const ids = [`filter-search`, `filter-min-gurus`, `filter-max-gurus`];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = ``;
      });
      [`filter-complaint`, `filter-defendant`, `filter-eyalet`].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = `ALL`;
      });
      applyFilters();
    }

    function getAggregateClaimGurus(financial) {
      const amount = Number(financial.normalized_gurus) || 0;
      return String(financial.quantification || ``).includes(`Unit Rate`) ? 0 : amount;
    }

    function updateKpis() {
      const totalDecrees = filteredDecrees.length;
      const totalSites = filteredDecrees.reduce((acc, d) => acc + d.locations.length, 0);
      const totalGurus = filteredDecrees.reduce((acc, d) => acc + getAggregateClaimGurus(d.financial), 0);

      // Modal defendant category
      const defCounts = {};
      filteredDecrees.forEach(d => {
        const key = d.defendant.defendant_status || `Other`;
        defCounts[key] = (defCounts[key] || 0) + 1;
      });
      let topDef = `—`;
      let topDefCount = 0;
      Object.entries(defCounts).forEach(([k, v]) => {
        if (v > topDefCount) {
          topDef = k;
          topDefCount = v;
        }
      });

      const activeKazalar = new Set();
      const activeEyalets = new Set();
      filteredDecrees.forEach(d => {
        activeEyalets.add(d.hierarchy.eyalet);
        d.locations.forEach(l => activeKazalar.add(l.receiver_location));
      });

      const elDec = document.getElementById(`kpi-val-decrees`);
      const elDecSub = document.getElementById(`kpi-sub-decrees`);
      const elGur = document.getElementById(`kpi-val-gurus`);
      const elGurSub = document.getElementById(`kpi-sub-gurus`);
      const elAcc = document.getElementById(`kpi-val-accused`);
      const elAccSub = document.getElementById(`kpi-sub-accused`);
      const elLoc = document.getElementById(`kpi-val-locations`);
      const elLocSub = document.getElementById(`kpi-sub-locations`);

      if (elDec) elDec.textContent = String(totalDecrees);
      if (elDecSub) {
        elDecSub.textContent = APP_STATE.lang === `tr`
          ? `${totalSites} mekânsal nokta · Muharrem 1059`
          : `${totalSites} spatial points · Muharrem 1059`;
      }
      if (elGur) elGur.textContent = Math.round(totalGurus).toLocaleString(`en-US`);
      if (elGurSub) {
        elGurSub.textContent = APP_STATE.lang === `tr`
          ? `Arşiv tahminleri dâhil; birim ücretleri hariç · 1 guruş = 80 akçe`
          : `Includes archival estimates; unit rates excluded · 1 guruş = 80 akçe`;
      }
      if (elAcc) elAcc.textContent = topDef;
      if (elAccSub) {
        const pct = totalDecrees ? Math.round((topDefCount / totalDecrees) * 100) : 0;
        elAccSub.textContent = APP_STATE.lang === `tr`
          ? `${topDefCount} hüküm (%${pct})`
          : `${topDefCount} decrees (${pct}% of filtered)`;
      }
      if (elLoc) elLoc.textContent = String(activeKazalar.size);
      if (elLocSub) {
        elLocSub.textContent = APP_STATE.lang === `tr`
          ? `${activeEyalets.size} eyalet dâhilinde`
          : `Across ${activeEyalets.size} imperial eyalets`;
      }
    }

    // =========================================================================
    // 10. MAP MARKERS, POPUPS & HEATMAP TOGGLE
    // =========================================================================
    function buildPopupHtml(d, loc) {
      const gurusTxt = d.financial.normalized_gurus > 0
        ? `${d.financial.normalized_gurus.toLocaleString(`en-US`)} guruş (${d.financial.quantification})`
        : d.financial.quantification;

      return `
        <div class="popup-card">
          <div class="popup-header">
            <span class="popup-place">${loc.receiver_location} (${loc.location_name})</span>
            <span class="popup-id">Decree #${d.decree_id} · M. ${d.year}</span>
          </div>
          <div class="popup-row">
            <span class="popup-k">Petitioner</span>
            <span class="popup-v"><strong>${d.petitioner_name}</strong> (${d.petitioner_title})</span>
          </div>
          <div class="popup-row">
            <span class="popup-k">Defendant</span>
            <span class="popup-v">${d.defendant.defendant_name} <em>[${d.defendant.defendant_status}]</em></span>
          </div>
          <div class="popup-row">
            <span class="popup-k">Financial Claim</span>
            <span class="popup-v">${gurusTxt}</span>
          </div>
          <div class="popup-row">
            <span class="popup-k">Hierarchy</span>
            <span class="popup-v">${d.hierarchy.eyalet} › ${d.hierarchy.sancak} › ${d.hierarchy.kaza}</span>
          </div>
          <div class="popup-row">
            <span class="popup-k">Receivers</span>
            <span class="popup-v">${d.receivers.join(`, `)}</span>
          </div>
          <div class="popup-directive">
            <strong>Dîvân Kararı (${d.resolution.directive_type}):</strong> ${d.resolution.directive_summary}
          </div>
        </div>
      `;
    }

    function renderAccessibleMapData() {
      const body = document.getElementById(`map-data-table-body`);
      if (!body) return;

      body.replaceChildren();
      const locations = filteredDecrees.flatMap(d => d.locations.map(loc => ({
        decreeId: d.decree_id,
        locationName: loc.location_name,
        receiverLocation: loc.receiver_location,
        latitude: loc.lat,
        longitude: loc.long
      })));

      if (!locations.length) {
        const row = document.createElement(`tr`);
        const cell = document.createElement(`td`);
        cell.colSpan = 5;
        cell.textContent = I18N[APP_STATE.lang].mapNoLocations;
        row.appendChild(cell);
        body.appendChild(row);
        return;
      }

      const formatCoordinate = value => {
        if (value === null || value === undefined || value === ``) return ``;
        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue.toFixed(4) : String(value);
      };

      locations.forEach(location => {
        const row = document.createElement(`tr`);
        const values = [
          `#${location.decreeId}`,
          location.locationName,
          location.receiverLocation,
          formatCoordinate(location.latitude),
          formatCoordinate(location.longitude)
        ];

        values.forEach((value, index) => {
          const cell = document.createElement(`td`);
          cell.textContent = String(value ?? ``);
          if (index >= 3) cell.classList.add(`num`);
          row.appendChild(cell);
        });
        body.appendChild(row);
      });
    }

    function renderMapMarkers() {
      if (!leafletMap || !markerGroup) return;
      markerGroup.clearLayers();
      markerByDecree.clear();

      const heatPoints = [];
      const maxGurus = Math.max(1, ...filteredDecrees.map(d => d.financial.normalized_gurus || 0));

      filteredDecrees.forEach(d => {
        const color = getCategoryColor(d.std_complaint);
        const isSelected = d.decree_id === APP_STATE.selectedDecreeId;
        const radius = d.financial.normalized_gurus > 1000 ? 9 : (d.financial.normalized_gurus > 0 ? 7 : 6);

        d.locations.forEach((loc, idx) => {
          const marker = L.circleMarker([loc.lat, loc.long], {
            radius: isSelected ? radius + 3 : radius,
            color: isSelected ? getToken(`--outline`) : getToken(`--on-surface`),
            weight: isSelected ? 2.5 : 1.2,
            fillColor: color,
            fillOpacity: APP_STATE.heatmapOn ? 0.65 : 0.9
          });

          marker.bindPopup(buildPopupHtml(d, loc), { maxWidth: 340 });
          marker.on(`click`, function () {
            selectDecree(d.decree_id, false);
          });
          marker.addTo(markerGroup);

          if (idx === 0) {
            markerByDecree.set(d.decree_id, marker);
          }

          heatPoints.push({
            lat: loc.lat,
            lng: loc.long,
            weight: 0.38 + 0.62 * Math.sqrt((d.financial.normalized_gurus || 150) / maxGurus)
          });
        });
      });

      if (heatLayerInstance) {
        heatLayerInstance.setPoints(heatPoints);
      }
    }

    function toggleHeatmap() {
      APP_STATE.heatmapOn = !APP_STATE.heatmapOn;
      const btn = document.getElementById(`btn-heatmap`);
      const lbl = document.getElementById(`lbl-heatmap`);
      if (btn) {
        btn.classList.toggle(`active`, APP_STATE.heatmapOn);
        btn.setAttribute(`aria-pressed`, String(APP_STATE.heatmapOn));
      }
      if (lbl) {
        const t = I18N[APP_STATE.lang];
        lbl.textContent = APP_STATE.heatmapOn ? t.heatmapOn : t.heatmapOff;
      }
      if (leafletMap && heatLayerInstance) {
        if (APP_STATE.heatmapOn) {
          heatLayerInstance.addTo(leafletMap);
        } else {
          leafletMap.removeLayer(heatLayerInstance);
        }
      }
      renderMapMarkers();
      saveAppState();
    }

    function fitMapToFiltered() {
      if (!leafletMap) return;
      const pts = [];
      filteredDecrees.forEach(d => d.locations.forEach(l => pts.push([l.lat, l.long])));
      if (pts.length > 0) {
        leafletMap.fitBounds(pts, { padding: [36, 36], maxZoom: 6 });
      } else {
        leafletMap.setView([39.2, 31.8], 5);
      }
    }

    // =========================================================================
    // 11. DECREE LIST & SELECTED DOSSIER
    // =========================================================================
    function renderDecreeList() {
      const listEl = document.getElementById(`decree-list`);
      const badgeEl = document.getElementById(`list-count-badge`);
      if (!listEl) return;
      const focusedDecreeId = document.activeElement?.classList?.contains(`decree-item`)
        ? document.activeElement.dataset.decreeId
        : null;

      if (badgeEl) {
        badgeEl.textContent = APP_STATE.lang === `tr`
          ? `${filteredDecrees.length} Kayıt`
          : `${filteredDecrees.length} Records`;
      }

      if (!filteredDecrees.length) {
        listEl.innerHTML = `
          <div class="empty-state">
            <p>${APP_STATE.lang === `tr` ? `Seçili filtrelere uygun hüküm bulunamadı.` : `No decrees match the active filter combination.`}</p>
            <button type="button" class="btn-secondary" onclick="resetFilters()">${APP_STATE.lang === `tr` ? `Filtreleri Sıfırla` : `Reset Filters`}</button>
          </div>
        `;
        return;
      }

      listEl.innerHTML = [...filteredDecrees]
        .sort((a, b) => b.decree_id - a.decree_id)
        .map(d => {
        const isSelected = d.decree_id === APP_STATE.selectedDecreeId;
        const selected = isSelected ? `selected` : ``;
        const amt = d.financial.normalized_gurus > 0
          ? `${d.financial.normalized_gurus.toLocaleString(`en-US`)} gr.`
          : `Qual.`;
        return `
          <button type="button" class="decree-item ${selected}" data-decree-id="${d.decree_id}" aria-pressed="${isSelected}" onclick="selectDecree(${d.decree_id}, true)">
            <div class="decree-item-top">
              <span class="decree-id-badge">Hüküm #${d.decree_id} · ${d.hierarchy.kaza}</span>
              <span class="stamp-tag">${d.std_complaint}</span>
            </div>
            <div class="decree-item-title">${d.petitioner_name} — ${d.complaint_subject}</div>
            <div class="decree-item-meta">
              <span>${d.hierarchy.eyalet} · vs. ${d.defendant.defendant_status}</span>
              <span class="decree-amount">${amt}</span>
            </div>
          </button>
        `;
      }).join(``);

      if (focusedDecreeId) {
        const focusedButton = Array.from(listEl.querySelectorAll(`.decree-item`))
          .find(button => button.dataset.decreeId === focusedDecreeId);
        focusedButton?.focus();
      }
    }

    function selectDecree(decreeId, flyTo) {
      APP_STATE.selectedDecreeId = decreeId;
      renderDecreeList();
      renderSelectedDossier();
      renderMapMarkers();

      if (flyTo && leafletMap) {
        const d = MASTER_DECREES.find(item => item.decree_id === decreeId);
        if (d && d.primary_loc) {
          if (APP_STATE.activeView !== `explorer`) {
            switchView(`explorer`);
          }
          leafletMap.flyTo([d.primary_loc.lat, d.primary_loc.long], 6, { duration: 0.65 });
          setTimeout(function () {
            const marker = markerByDecree.get(decreeId);
            if (marker) marker.openPopup();
          }, 420);
        }
      }
      saveAppState();
    }

    function renderSelectedDossier() {
      const bodyEl = document.getElementById(`dossier-body`);
      const badgeEl = document.getElementById(`dossier-decree-badge`);
      if (!bodyEl) return;

      const d = filteredDecrees.find(item => item.decree_id === APP_STATE.selectedDecreeId)
        || MASTER_DECREES.find(item => item.decree_id === APP_STATE.selectedDecreeId);

      if (!d) {
        bodyEl.innerHTML = `<p class="dossier-field-val muted">Select a decree from the register or map to inspect all 7 relational tables.</p>`;
        if (badgeEl) badgeEl.textContent = `—`;
        return;
      }

      if (badgeEl) badgeEl.textContent = `Decree #${d.decree_id} · M. ${d.year}`;

      const locNames = d.locations.map(l => `${l.receiver_location} (${l.lat.toFixed(2)}, ${l.long.toFixed(2)})`).join(`; `);
      const finSummary = d.financial.normalized_gurus > 0
        ? `${d.financial.normalized_gurus.toLocaleString(`en-US`)} guruş (${d.financial.amount_akce} akçe) — ${d.financial.quantification}`
        : `${d.financial.claim_type} (${d.financial.quantification})`;

      bodyEl.innerHTML = `
        <div class="dossier-grid">
          <div class="dossier-field">
            <div class="dossier-field-label">Petitioner · Davacı</div>
            <div class="dossier-field-val"><strong>${d.petitioner_name}</strong><br>${d.petitioner_title} (${d.petitioner_gender})</div>
          </div>
          <div class="dossier-field">
            <div class="dossier-field-label">Defendant · Şikâyet Edilen</div>
            <div class="dossier-field-val"><strong>${d.defendant.defendant_name}</strong><br>${d.defendant.defendant_category}</div>
          </div>
          <div class="dossier-field">
            <div class="dossier-field-label">Financial Claim · Parasal Miktar</div>
            <div class="dossier-field-val">${finSummary}</div>
          </div>
          <div class="dossier-field">
            <div class="dossier-field-label">Imperial Receivers · Muhataplar</div>
            <div class="dossier-field-val">${d.receivers.join(`, `)} (${d.receiver_count} entries)</div>
          </div>
          <div class="dossier-field full">
            <div class="dossier-field-label">Admin Hierarchy · İdarî Hiyerarşi (Eyalet › Sancak › Kaza › Karye)</div>
            <div class="dossier-field-val">${d.hierarchy.eyalet} › ${d.hierarchy.sancak} › ${d.hierarchy.kaza} › ${d.hierarchy.karye_or_nefs}</div>
          </div>
          <div class="dossier-field full">
            <div class="dossier-field-label">Complaint Subject · Şikâyet Konusu</div>
            <div class="dossier-field-val">${d.complaint_subject}</div>
          </div>
          <div class="dossier-field full">
            <div class="dossier-field-label">Dîvân Resolution · Dîvân Kararı (${d.resolution.directive_type})</div>
            <div class="dossier-field-val">${d.resolution.directive_summary} <em>[To: ${d.resolution.target_authority}]</em></div>
          </div>
          <div class="dossier-field full">
            <div class="dossier-field-label">Geocoded Coordinates · Koordinatlar (${d.locations.length} pts)</div>
            <div class="dossier-field-val mono">${locNames}</div>
          </div>
        </div>
      `;
    }

    // =========================================================================
    // 12. ANALYTICS VIEW (Chart.js)
    // =========================================================================
    function destroyCharts() {
      Object.values(chartInstances).forEach(ch => {
        if (ch && typeof ch.destroy === `function`) ch.destroy();
      });
      chartInstances = {};
    }

    function renderAccessibleDataTable(containerId, captionText, headers, rows) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const table = document.createElement(`table`);
      table.className = `data-table`;

      const caption = document.createElement(`caption`);
      caption.textContent = captionText;
      table.appendChild(caption);

      const thead = document.createElement(`thead`);
      const headerRow = document.createElement(`tr`);
      headers.forEach(headerText => {
        const header = document.createElement(`th`);
        header.scope = `col`;
        header.textContent = headerText;
        headerRow.appendChild(header);
      });
      thead.appendChild(headerRow);
      table.appendChild(thead);

      const tbody = document.createElement(`tbody`);
      rows.forEach(values => {
        const row = document.createElement(`tr`);
        values.forEach(value => {
          const cell = document.createElement(`td`);
          cell.textContent = String(value ?? ``);
          row.appendChild(cell);
        });
        tbody.appendChild(row);
      });
      if (!rows.length) {
        const row = document.createElement(`tr`);
        const cell = document.createElement(`td`);
        cell.colSpan = headers.length;
        cell.textContent = I18N[APP_STATE.lang].chartNoData;
        row.appendChild(cell);
        tbody.appendChild(row);
      }
      table.appendChild(tbody);
      container.replaceChildren(table);
    }

    function renderAnalyticsCharts() {
      destroyCharts();
      const canRenderCharts = typeof Chart !== `undefined`;
      const chartText = I18N[APP_STATE.lang];

      const textCol = getToken(`--on-surface`);
      const mutedCol = getToken(`--on-surface-variant`);
      const gridCol = getToken(`--outline-variant`);
      const d1 = getToken(`--data-1`);
      const d2 = getToken(`--data-2`);
      const d3 = getToken(`--data-3`);
      const d4 = getToken(`--data-4`);
      const d5 = getToken(`--data-5`);

      // Chart 1: Financial Claims (Normalized Guruş) by Complaint Category
      const catSums = {};
      filteredDecrees.forEach(d => {
        catSums[d.std_complaint] = (catSums[d.std_complaint] || 0) + getAggregateClaimGurus(d.financial);
      });
      const catEntries = Object.entries(catSums).sort((a, b) => b[1] - a[1]);
      renderAccessibleDataTable(
        `chart-financial-data`,
        chartText.chartDataCaptions[0],
        chartText.chartDataHeaders[0],
        catEntries.map(([category, amount]) => [category, Math.round(amount)])
      );

      const ctx1 = document.getElementById(`chart-financial-cat`);
      if (ctx1 && canRenderCharts) {
        chartInstances.c1 = new Chart(ctx1, {
          type: `bar`,
          data: {
            labels: catEntries.map(e => e[0]),
            datasets: [{
              label: `Normalized Guruş`,
              data: catEntries.map(e => Math.round(e[1])),
              backgroundColor: [d1, d2, d3, d4, d5, d1, d2],
              borderRadius: 2
            }]
          },
          options: {
            indexAxis: `y`,
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              x: { ticks: { color: mutedCol }, grid: { color: gridCol } },
              y: { ticks: { color: textCol, font: { size: 11 } }, grid: { display: false } }
            }
          }
        });
      }

      // Chart 2: Accused Defendant Breakdown
      const defCounts = {};
      filteredDecrees.forEach(d => {
        const k = d.defendant.defendant_status || `Other`;
        defCounts[k] = (defCounts[k] || 0) + 1;
      });
      const defEntries = Object.entries(defCounts).sort((a, b) => b[1] - a[1]);
      renderAccessibleDataTable(
        `chart-defendants-data`,
        chartText.chartDataCaptions[1],
        chartText.chartDataHeaders[1],
        defEntries
      );

      const ctx2 = document.getElementById(`chart-defendants`);
      if (ctx2 && canRenderCharts) {
        chartInstances.c2 = new Chart(ctx2, {
          type: `doughnut`,
          data: {
            labels: defEntries.map(e => e[0]),
            datasets: [{
              data: defEntries.map(e => e[1]),
              backgroundColor: [d1, d2, d3, d4, d5, getToken(`--data-6`)],
              borderColor: getToken(`--surface-container-low`),
              borderWidth: 2
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: `right`,
                labels: { color: textCol, boxWidth: 12, font: { size: 11 } }
              }
            }
          }
        });
      }

      // Chart 3: Eyalet Connectivity (Decree Count vs Spatial Locations)
      const eyaletStats = {};
      filteredDecrees.forEach(d => {
        const e = d.hierarchy.eyalet;
        if (!eyaletStats[e]) eyaletStats[e] = { decrees: 0, sites: 0 };
        eyaletStats[e].decrees += 1;
        eyaletStats[e].sites += d.locations.length;
      });
      const eyaletEntries = Object.entries(eyaletStats).sort((a, b) => b[1].decrees - a[1].decrees);
      renderAccessibleDataTable(
        `chart-eyalets-data`,
        chartText.chartDataCaptions[2],
        chartText.chartDataHeaders[2],
        eyaletEntries.map(([eyalet, stats]) => [eyalet, stats.decrees, stats.sites])
      );

      const ctx3 = document.getElementById(`chart-eyalets`);
      if (ctx3 && canRenderCharts) {
        chartInstances.c3 = new Chart(ctx3, {
          type: `bar`,
          data: {
            labels: eyaletEntries.map(e => e[0]),
            datasets: [
              { label: `Decrees`, data: eyaletEntries.map(e => e[1].decrees), backgroundColor: d1, borderRadius: 2 },
              { label: `Spatial Sites`, data: eyaletEntries.map(e => e[1].sites), backgroundColor: d2, borderRadius: 2 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: textCol, boxWidth: 12 } }
            },
            scales: {
              x: { ticks: { color: textCol, font: { size: 10 } }, grid: { display: false } },
              y: { ticks: { color: mutedCol, precision: 0 }, grid: { color: gridCol } }
            }
          }
        });
      }

      // Chart 4: Dîvân Resolutions by Petitioner Gender (Male / Group / Female)
      const resGroups = {};
      filteredDecrees.forEach(d => {
        const rType = d.resolution.directive_type.split(` (`)[0];
        if (!resGroups[rType]) resGroups[rType] = { male: 0, group: 0, female: 0 };
        const g = d.petitioner_gender === `female` ? `female` : (d.petitioner_gender === `group` ? `group` : `male`);
        resGroups[rType][g] += 1;
      });
      const resEntries = Object.entries(resGroups).sort((a, b) => {
        const sumA = a[1].male + a[1].group + a[1].female;
        const sumB = b[1].male + b[1].group + b[1].female;
        return sumB - sumA;
      }).slice(0, 7);
      renderAccessibleDataTable(
        `chart-resolutions-data`,
        chartText.chartDataCaptions[3],
        chartText.chartDataHeaders[3],
        resEntries.map(([resolution, counts]) => [
          resolution,
          counts.male,
          counts.group,
          counts.female
        ])
      );

      const ctx4 = document.getElementById(`chart-resolutions`);
      if (ctx4 && canRenderCharts) {
        chartInstances.c4 = new Chart(ctx4, {
          type: `bar`,
          data: {
            labels: resEntries.map(e => e[0]),
            datasets: [
              { label: `Male`, data: resEntries.map(e => e[1].male), backgroundColor: d1, borderRadius: 2 },
              { label: `Group / Collective`, data: resEntries.map(e => e[1].group), backgroundColor: d2, borderRadius: 2 },
              { label: `Female`, data: resEntries.map(e => e[1].female), backgroundColor: d3, borderRadius: 2 }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: textCol, boxWidth: 12 } }
            },
            scales: {
              x: { stacked: true, ticks: { color: textCol, font: { size: 10 } }, grid: { display: false } },
              y: { stacked: true, ticks: { color: mutedCol, precision: 0 }, grid: { color: gridCol } }
            }
          }
        });
      }
    }

    // =========================================================================
    // 13. SEVEN-TABLE RELATIONAL DATABASE EXPLORER
    // =========================================================================
    const SCHEMA_TABLES = [
      {
        key: `petitioners_table`,
        tr: `Davacılar Tablosu (Kaynak)`,
        desc: `Core archival petitioners (decree_id PK, petitioner_name, title, gender, complaint_subject, date)`
      },
      {
        key: `locations_table`,
        tr: `Konumlar Tablosu (Kaynak)`,
        desc: `Geocoded spatial coordinates (location_id PK, decree_id FK, location_name, receiver_location, lat, long)`
      },
      {
        key: `receiver_table`,
        tr: `Alıcılar / Muhataplar (Kaynak)`,
        desc: `Imperial directive recipients (receiver_id PK, decree_id FK, receiver_title)`
      },
      {
        key: `defendants_table`,
        tr: `Şikâyet Edilenler`,
        desc: `Accused officials and private actors (defendant_id PK, decree_id FK, defendant_name, category, status)`
      },
      {
        key: `financial_claims_table`,
        tr: `Parasal Miktarlar`,
        desc: `Guruş–Akçe financial claims & archival coding (claim_id PK, decree_id FK, normalized_gurus, claim_type)`
      },
      {
        key: `admin_hierarchy_table`,
        tr: `Eyalet–Sancak–Kaza–Karye`,
        desc: `Ottoman administrative hierarchy grounded in Yer Adları Sözlüğü (hier_id PK, decree_id FK, eyalet, sancak, kaza)`
      },
      {
        key: `resolutions_table`,
        tr: `Dîvân Kararları `,
        desc: `Imperial Council legal directives and enforcement authorities (resolution_id PK, decree_id FK, directive_type)`
      }
    ];

    function getTableRows(key) {
      const validIds = new Set(filteredDecrees.map(d => d.decree_id));
      if (key === `petitioners_table`) return PETITIONERS_TABLE.filter(r => validIds.has(r.decree_id));
      if (key === `locations_table`) return LOCATIONS_TABLE.filter(r => validIds.has(r.decree_id));
      if (key === `receiver_table`) return RECEIVER_TABLE.filter(r => validIds.has(r.decree_id));
      if (key === `defendants_table`) return DEFENDANTS_TABLE.filter(r => validIds.has(r.decree_id));
      if (key === `financial_claims_table`) return FINANCIAL_CLAIMS_TABLE.filter(r => validIds.has(r.decree_id));
      if (key === `admin_hierarchy_table`) return ADMIN_HIERARCHY_TABLE.filter(r => validIds.has(r.decree_id));
      if (key === `resolutions_table`) return RESOLUTIONS_TABLE.filter(r => validIds.has(r.decree_id));
      return [];
    }

    function selectSchemaTable(key) {
      APP_STATE.activeSchemaTable = key;
      renderSchemaSelector();
      renderSchemaTable();
      saveAppState();
    }

    function renderSchemaSelector() {
      const wrap = document.getElementById(`schema-selector`);
      if (!wrap) return;
      wrap.innerHTML = SCHEMA_TABLES.map(t => {
        const rows = getTableRows(t.key);
        const active = t.key === APP_STATE.activeSchemaTable ? `active` : ``;
        return `
          <button type="button" class="schema-btn ${active}" onclick="selectSchemaTable('${t.key}')">
            <span class="schema-name">${t.key}</span>
            <span class="schema-tr">${t.tr}</span>
            <span class="schema-count">${rows.length} filtered rows · FK: decree_id</span>
          </button>
        `;
      }).join(``);
    }

    function renderSchemaTable() {
      renderSchemaSelector();
      const meta = SCHEMA_TABLES.find(t => t.key === APP_STATE.activeSchemaTable) || SCHEMA_TABLES[0];
      const rows = getTableRows(meta.key);

      const titleEl = document.getElementById(`schema-active-title`);
      const descEl = document.getElementById(`schema-active-desc`);
      const cntEl = document.getElementById(`schema-row-count`);
      const thead = document.getElementById(`schema-thead`);
      const tbody = document.getElementById(`schema-tbody`);

      if (titleEl) titleEl.textContent = `${meta.key} — ${meta.tr}`;
      if (descEl) descEl.textContent = meta.desc;
      if (cntEl) cntEl.textContent = `${rows.length} rows`;
      if (!thead || !tbody) return;

      if (!rows.length) {
        thead.innerHTML = ``;
        tbody.innerHTML = `<tr><td colspan="6" class="empty-table-cell">No records match active filters.</td></tr>`;
        return;
      }

      const cols = Object.keys(rows[0]);
      thead.innerHTML = `<tr>${cols.map(c => {
        const isNum = [`amount_gurus`, `amount_akce`, `normalized_gurus`, `lat`, `long`, `year`].includes(c);
        return `<th class="${isNum ? `num` : ``}">${c}</th>`;
      }).join(``)}<th>Map Action</th></tr>`;

      tbody.innerHTML = rows.map(r => {
        const tds = cols.map(c => {
          const val = r[c];
          const isNum = [`amount_gurus`, `amount_akce`, `normalized_gurus`, `lat`, `long`, `year`].includes(c);
          if (c === `decree_id`) {
            return `<td><button type="button" class="inline-link-btn" onclick="selectDecree(${val}, true)">#${val}</button></td>`;
          }
          return `<td class="${isNum ? `num` : ``}">${val !== null && val !== undefined ? val : ``}</td>`;
        }).join(``);
        return `<tr>${tds}<td><button type="button" class="inline-link-btn" onclick="selectDecree(${r.decree_id}, true)">Fly to Map</button></td></tr>`;
      }).join(``);
    }

    // =========================================================================
    // 14. VIEW SWITCHING, THEME, LOCALIZATION & CSV EXPORT
    // =========================================================================
    function switchView(viewName) {
      APP_STATE.activeView = viewName;
      document.querySelectorAll(`.tab-btn`).forEach(btn => {
        const isActive = btn.dataset.view === viewName;
        btn.classList.toggle(`active`, isActive);
        btn.setAttribute(`aria-pressed`, String(isActive));
      });
      document.querySelectorAll(`.view-section`).forEach(sec => {
        sec.classList.toggle(`active`, sec.id === `view-${viewName}`);
      });

      if (viewName === `explorer` && leafletMap) {
        setTimeout(function () {
          leafletMap.invalidateSize();
        }, 60);
      } else if (viewName === `analytics`) {
        setTimeout(function () {
          renderAnalyticsCharts();
        }, 40);
      } else if (viewName === `schema`) {
        renderSchemaTable();
      }
      saveAppState();
    }

    function applyThemeDom() {
      document.documentElement.setAttribute(`data-theme`, APP_STATE.theme);
      const t = I18N[APP_STATE.lang];
      const lbl = document.getElementById(`lbl-theme`);
      const btn = document.getElementById(`btn-theme`);
      if (lbl) lbl.textContent = APP_STATE.theme === `dark` ? t.themeLight : t.themeDark;
      if (btn) btn.setAttribute(`aria-pressed`, String(APP_STATE.theme === `dark`));
      renderLegend();
      updateMapThemeStyles();
      if (APP_STATE.activeView === `analytics`) {
        renderAnalyticsCharts();
      }
    }

    function toggleTheme() {
      APP_STATE.theme = APP_STATE.theme === `light` ? `dark` : `light`;
      applyThemeDom();
      saveAppState();
    }

    function applyLanguageDom() {
      const t = I18N[APP_STATE.lang];
      document.documentElement.lang = APP_STATE.lang === `tr` ? `tr` : `en`;
      const mapIds = {
        'ui-kicker': t.kicker,
        'ui-main-title': t.title,
        'ui-main-lede': t.lede,
        'lbl-lang': t.langBtn,
        'lbl-theme': APP_STATE.theme === `dark` ? t.themeLight : t.themeDark,
        'lbl-export': t.exportBtn,
        'tab-lbl-explorer': t.tabExplorer,
        'tab-lbl-analytics': t.tabAnalytics,
        'tab-lbl-schema': t.tabSchema,
        'kpi-lbl-decrees': t.kpiDecrees,
        'kpi-lbl-gurus': t.kpiGurus,
        'kpi-lbl-accused': t.kpiAccused,
        'kpi-lbl-locations': t.kpiLocations,
        'ui-filter-title': t.filterTitle,
        'lbl-search': t.lblSearch,
        'lbl-complaint': t.lblComplaint,
        'lbl-defendant': t.lblDefendant,
        'lbl-eyalet': t.lblEyalet,
        'lbl-range': t.lblRange,
        'lbl-reset': t.lblReset,
        'ui-map-title': t.mapTitle,
        'map-accessible-description': t.mapAccessibleDescription,
        'map-data-summary': t.mapDataSummary,
        'map-country-labels': t.mapCountryLabels,
        'map-table-caption': t.mapTableCaption,
        'lbl-heatmap': APP_STATE.heatmapOn ? t.heatmapOn : t.heatmapOff,
        'lbl-fit-map': t.fitMap,
        'ui-list-title': t.listTitle,
        'ui-dossier-title': t.dossierTitle,
        'lbl-export-table': t.exportTable
      };
      Object.entries(mapIds).forEach(([id, txt]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = txt;
      });
      document.getElementById(`filter-min-gurus`)
        ?.setAttribute(`aria-label`, t.lblMinGurus);
      document.getElementById(`filter-max-gurus`)
        ?.setAttribute(`aria-label`, t.lblMaxGurus);
      t.mapTableHeaders.forEach((text, index) => {
        const header = document.getElementById(`map-table-header-${index + 1}`);
        if (header) header.textContent = text;
      });
      t.chartDataSummaries.forEach((text, index) => {
        const summary = document.getElementById(`chart-data-summary-${index + 1}`);
        if (summary) summary.textContent = text;
      });
      updateKpis();
      renderDecreeList();
      renderAccessibleMapData();
      if (APP_STATE.activeView === `analytics`) renderAnalyticsCharts();
      const statusEl = document.getElementById(`filter-status-text`);
      if (statusEl) {
        statusEl.textContent = APP_STATE.lang === `tr`
          ? `${MASTER_DECREES.length} hükümden ${filteredDecrees.length} tanesi gösteriliyor`
          : `Showing ${filteredDecrees.length} of ${MASTER_DECREES.length} decrees`;
      }
    }

    function toggleLanguage() {
      APP_STATE.lang = APP_STATE.lang === `en` ? `tr` : `en`;
      applyLanguageDom();
      saveAppState();
    }

    function toCsvCell(val) {
      const s = String(val !== null && val !== undefined ? val : ``).replace(/"/g, `""`);
      return `"${s}"`;
    }

    function downloadCsv(csvString, filename) {
      if (window.notebookAppApi && typeof window.notebookAppApi.triggerFileDownload === `function`) {
        window.notebookAppApi.triggerFileDownload({
          content: csvString,
          contentType: `text/csv`,
          encoding: `UTF-8`,
          filename: filename
        });
      } else {
        const blob = new Blob([`\uFEFF` + csvString], { type: `text/csv;charset=utf-8;` });
        const url = URL.createObjectURL(blob);
        const a = document.createElement(`a`);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
      const fb = document.getElementById(`export-feedback`);
      if (fb) {
        fb.textContent = `Exported ${filename}`;
        setTimeout(() => { fb.textContent = ``; }, 3500);
      }
    }

    function exportFilteredCsv() {
      const headers = [
        `decree_id`, `year_hijri`, `month`, `petitioner_name`, `petitioner_title`, `petitioner_gender`,
        `complaint_subject`, `std_complaint`, `defendant_name`, `defendant_category`, `defendant_status`,
        `normalized_gurus`, `amount_akce`, `claim_type`, `quantification`,
        `eyalet`, `sancak`, `kaza`, `karye_or_nefs`, `primary_lat`, `primary_long`,
        `all_receivers`, `directive_type`, `directive_summary`, `target_authority`
      ];
      const rows = filteredDecrees.map(d => [
        d.decree_id, d.year, d.month, d.petitioner_name, d.petitioner_title, d.petitioner_gender,
        d.complaint_subject, d.std_complaint, d.defendant.defendant_name, d.defendant.defendant_category, d.defendant.defendant_status,
        d.financial.normalized_gurus, d.financial.amount_akce, d.financial.claim_type, d.financial.quantification,
        d.hierarchy.eyalet, d.hierarchy.sancak, d.hierarchy.kaza, d.hierarchy.karye_or_nefs,
        d.primary_loc.lat, d.primary_loc.long, d.receivers.join(`; `),
        d.resolution.directive_type, d.resolution.directive_summary, d.resolution.target_authority
      ].map(toCsvCell).join(`,`));

      const csv = [headers.join(`,`), ...rows].join(`\n`);
      downloadCsv(csv, `ottoman_hgis_1649_master_filtered.csv`);
    }

    function exportActiveTableCsv() {
      const rows = getTableRows(APP_STATE.activeSchemaTable);
      if (!rows.length) return;
      const cols = Object.keys(rows[0]);
      const lines = [
        cols.join(`,`),
        ...rows.map(r => cols.map(c => toCsvCell(r[c])).join(`,`))
      ];
      downloadCsv(lines.join(`\n`), `${APP_STATE.activeSchemaTable}_filtered.csv`);
    }

    // =========================================================================
    // 15. NOTEBOOK SHIM STATE PERSISTENCE
    // =========================================================================
    async function saveAppState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.setAppState === `function`) {
        try {
          await window.notebookAppApi.setAppState({
            lang: APP_STATE.lang,
            theme: APP_STATE.theme,
            activeView: APP_STATE.activeView,
            heatmapOn: APP_STATE.heatmapOn,
            selectedDecreeId: APP_STATE.selectedDecreeId,
            activeSchemaTable: APP_STATE.activeSchemaTable,
            filters: APP_STATE.filters
          });
        } catch (e) {
          // Graceful fallback if shim unavailable in standalone preview
        }
      }
    }

    async function loadAppState() {
      if (window.notebookAppApi && typeof window.notebookAppApi.getAppState === `function`) {
        try {
          const saved = await window.notebookAppApi.getAppState();
          if (saved) {
            if (saved.lang) APP_STATE.lang = saved.lang;
            if (saved.theme) APP_STATE.theme = saved.theme;
            if (saved.activeView) APP_STATE.activeView = saved.activeView;
            if (typeof saved.heatmapOn === `boolean`) APP_STATE.heatmapOn = saved.heatmapOn;
            if (saved.selectedDecreeId) APP_STATE.selectedDecreeId = saved.selectedDecreeId;
            if (saved.activeSchemaTable) APP_STATE.activeSchemaTable = saved.activeSchemaTable;
            if (saved.filters) {
              APP_STATE.filters = { ...APP_STATE.filters, ...saved.filters };
              const setVal = (id, v) => {
                const el = document.getElementById(id);
                if (el && v !== undefined && v !== null) el.value = v;
              };
              setVal(`filter-search`, APP_STATE.filters.search);
              setVal(`filter-complaint`, APP_STATE.filters.complaint);
              setVal(`filter-defendant`, APP_STATE.filters.defendant);
              setVal(`filter-eyalet`, APP_STATE.filters.eyalet);
              setVal(`filter-min-gurus`, APP_STATE.filters.minGurus);
              setVal(`filter-max-gurus`, APP_STATE.filters.maxGurus);
            }
          }
        } catch (e) {
          // Ignore if no saved state
        }
      }
    }

    // =========================================================================
    // 16. BOOTSTRAP
    // =========================================================================
    async function loadDashboardTables() {
      const response = await fetch(`./data/processed/dashboard_data.json`);
      if (!response.ok) {
        throw new Error(`Data request failed (${response.status})`);
      }

      const tables = await response.json();
      if (
        !Array.isArray(tables.petitioners) ||
        !Array.isArray(tables.locations) ||
        !Array.isArray(tables.receivers)
      ) {
        throw new Error(`The server returned an invalid data format`);
      }

      PETITIONERS_TABLE = tables.petitioners;
      LOCATIONS_TABLE = tables.locations;
      RECEIVER_TABLE = tables.receivers;
    }

    function showDataLoadError(error) {
      const message = document.createElement(`div`);
      message.setAttribute(`role`, `alert`);
      message.style.cssText = `margin: 1rem; padding: 1rem; border: 1px solid #9b2c2c; color: #9b2c2c; background: #fffdf8;`;
      message.textContent = `Dashboard data could not be loaded. Start the Python server with "python app.py" and reload this page. ${error.message}`;
      document.body.prepend(message);
    }

    document.addEventListener(`DOMContentLoaded`, async function () {
      try {
        await loadDashboardTables();
      } catch (error) {
        console.error(`Unable to load dashboard data:`, error);
        showDataLoadError(error);
        return;
      }

      populateFilterOptions();
      initMap();
      await loadAppState();
      applyThemeDom();
      applyLanguageDom();
      applyFilters(true);

      if (APP_STATE.heatmapOn && leafletMap && heatLayerInstance) {
        heatLayerInstance.addTo(leafletMap);
        const btn = document.getElementById(`btn-heatmap`);
        if (btn) btn.classList.add(`active`);
      }

      if (APP_STATE.activeView && APP_STATE.activeView !== `explorer`) {
        switchView(APP_STATE.activeView);
      }

      if (typeof lucide !== `undefined` && typeof lucide.createIcons === `function`) {
        lucide.createIcons();
      }

      if (window.notebookAppApi && typeof window.notebookAppApi.notifyAppReady === `function`) {
        window.notebookAppApi.notifyAppReady();
      }
    });
