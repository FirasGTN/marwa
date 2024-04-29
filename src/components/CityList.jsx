import React from "react";

function CityList(props) {
  const tunisiaStates = [
    {
      name: "Tunis",
      cities: [
        "Tunis",
        "Le Bardo",
        "Le Kram",
        "La Goulette",
        "Carthage",
        "Sidi Bou Said",
        "La Marsa",
        "Sidi Hassine",
      ],
    },
    {
      name: "Ariana",
      cities: [
        "Ariana",
        "La Soukra",
        "Raoued",
        "Kalaat el Andalous",
        "Sidi Thabet",
        "Ettadhamen-Mnihla",
      ],
    },
    {
      name: "Ben Arous",
      cities: [
        "Ben Arous",
        "El Mourouj",
        "Hammam Lif",
        "Hammam Chott",
        "Bou Mhel el-Bassatine",
        "Ezzahra",
        "Rades",
        "Megrine",
        "Mohamedia-Fouchana",
        "Mornag",
        "Khalidia",
      ],
    },
    {
      name: "Mannouba",
      cities: [
        "Manouba",
        "Den Den",
        "Douar Hicher",
        "Oued Ellil",
        "Mornaguia",
        "Borj El Amri",
        "Djedeida",
        "Tebourba",
        "El Battan",
      ],
    },
    {
      name: "Bizerte",
      cities: [
        "Bizerte",
        "Sejnane",
        "Mateur",
        "Menzel Bourguiba",
        "Tinja",
        "Ghar Al Milh",
        "Aousja",
        "Menzel Jemil",
        "Menzel Abderrahmane",
        "El Alia",
        "Ras Jebel",
        "Metline",
        "Raf Raf",
      ],
    },
    {
      name: "Nabeul",
      cities: [
        "Nabeul",
        "Dar Chaabane",
        "Béni Khiar",
        "El Maamoura",
        "Somaa",
        "Korba",
        "Tazerka",
        "Menzel Temime",
        "Menzel Horr",
        "El Mida",
        "Kelibia",
        "Azmour",
        "Hammam Ghezeze",
        "Dar Allouch",
        "El Haouaria",
        "Takelsa",
        "Soliman",
        "Korbous",
        "Menzel Bouzelfa",
        "Beni Khalled",
        "Zaouiet Djedidi",
        "Grombalia",
        "Bou Argoub",
        "Hammamet",
      ],
    },
    {
      name: "Béja",
      cities: [
        "Béja",
        "El Maagoula",
        "Zahret Medien",
        "Nefza",
        "Téboursouk",
        "Testour",
        "Goubellat",
        "Majaz al Bab",
      ],
    },
    {
      name: "Jendouba",
      cities: [
        "Jendouba",
        "Bou Salem",
        "Tabarka",
        "Ain Drahem",
        "Fernana",
        "Beni M'Tir",
        "Ghardimaou",
        "Oued Melliz",
      ],
    },
    {
      name: "Zaghouan",
      cities: [
        "Zaghouan",
        "Zriba",
        "Bir Mcherga",
        "Djebel Oust",
        "El Fahs",
        "Nadhour",
      ],
    },
    {
      name: "Siliana",
      cities: [
        "Siliana",
        "Bou Arada",
        "Gaâfour",
        "El Krib",
        "Sidi Bou Rouis",
        "Maktar",
        "Rouhia",
        "Kesra",
        "Bargou",
        "El Aroussa",
      ],
    },
    {
      name: "Le Kef",
      cities: [
        "El Kef",
        "Nebeur",
        "Touiref",
        "Sakiet Sidi Youssef",
        "Tajerouine",
        "Menzel Salem",
        "Kalaat es Senam",
        "Kalâat Khasba",
        "Jérissa",
        "El Ksour",
        "Dahmani",
        "Sers",
      ],
    },
    {
      name: "Sousse",
      cities: [
        "Sousse",
        "Ksibet Thrayet",
        "Ezzouhour",
        "Zaouiet Sousse",
        "Hammam Sousse",
        "Akouda",
        "Kalâa Kebira",
        "Sidi Bou Ali",
        "Hergla",
        "Enfidha",
        "Bouficha",
        "Sidi El Hani",
        "M'saken",
        "Kalâa Seghira",
        "Messaadine",
        "Kondar",
      ],
    },
    {
      name: "Monastir",
      cities: [
        "Monastir",
        "Khniss",
        "Ouerdanin",
        "Sahline Moôtmar",
        "Sidi Ameur",
        "Zéramdine",
        "Beni Hassen",
        "Ghenada",
        "Jemmal",
        "Menzel Kamel",
        "Zaouiet Kontoch",
        "Bembla-Mnara",
        "Menzel Ennour",
        "El Masdour",
        "Moknine",
        "Sidi Bennour",
        "Menzel Farsi",
        "Amiret El Fhoul",
        "Amiret Touazra",
        "Amiret El Hojjaj",
        "Cherahil",
        "Bekalta",
        "Téboulba",
        "Ksar Hellal",
        "Ksibet El Mediouni",
        "Benen Bodher",
        "Touza",
        "Sayada",
        "Lemta",
        "Bouhjar",
        "Menzel Hayet",
      ],
    },
    {
      name: "Mahdia",
      cities: [
        "Mahdia",
        "Rejiche",
        "Bou Merdes",
        "Ouled Chamekh",
        "Chorbane",
        "Hebira",
        "Essouassi",
        "El Djem",
        "Kerker",
        "Chebba",
        "Melloulèche",
        "Sidi Alouane",
        "Ksour Essef",
        "El Bradâa",
      ],
    },
    {
      name: "Kasserine",
      cities: [
        "Kasserine",
        "Sbeitla",
        "Sbiba",
        "Jedelienne",
        "Thala",
        "Haïdra",
        "Foussana",
        "Fériana",
        "Thélepte",
        "Magel Bel Abbès",
      ],
    },
    {
      name: "Sidi Bouzid",
      cities: [
        "Sidi Bouzid",
        "Jilma",
        "Cebalet",
        "Bir El Hafey",
        "Sidi Ali Ben Aoun",
        "Menzel Bouzaiane",
        "Meknassy",
        "Mezzouna",
        "Regueb",
        "Ouled Haffouz",
      ],
    },
    {
      name: "Kairouan",
      cities: [
        "Kairouan",
        "Chebika",
        "Sbikha",
        "Oueslatia",
        "Aïn Djeloula",
        "Haffouz",
        "Alaâ",
        "Hajeb El Ayoun",
        "Nasrallah",
        "Menzel Mehiri",
        "Echrarda",
        "Bou Hajla",
      ],
    },
    {
      name: "Gafsa",
      cities: [
        "Gafsa",
        "El Ksar",
        "Moularès",
        "Redeyef",
        "Métlaoui",
        "Mdhila",
        "El Guettar",
        "Sened",
      ],
    },
    {
      name: "Sfax",
      cities: [
        "Sfax",
        "Sakiet Ezzit",
        "Chihia",
        "Sakiet Eddaïer",
        "Gremda",
        "El Ain",
        "Thyna",
        "Agareb",
        "Jebiniana",
        "El Hencha",
        "Menzel Chaker",
        "Ghraïba, Tunisia",
        "Bir Ali Ben Khélifa",
        "Skhira",
        "Mahares",
        "Kerkennah",
      ],
    },
    {
      name: "Gabès",
      cities: [
        "Gabès",
        "Chenini Nahal",
        "Ghannouch",
        "Métouia",
        "Oudhref",
        "El Hamma",
        "Matmata",
        "Nouvelle Matmata",
        "Mareth",
        "Zarat",
      ],
    },
    {
      name: "Médenine",
      cities: [
        "Medenine",
        "Beni Khedache",
        "Ben Gardane",
        "Zarzis",
        "Houmt El Souk (Djerba)",
        "Midoun (Djerba)",
        "Ajim (Djerba)",
      ],
    },
    {
      name: "Tozeur",
      cities: ["Tozeur", "Degache", "Hamet Jerid", "Nafta", "Tamerza"],
    },
    {
      name: "Kebili",
      cities: ["Kebili", "Djemna", "Douz", "El Golâa", "Souk Lahad"],
    },
    {
      name: "Tataouine",
      cities: ["Tataouine", "Bir Lahmar", "Ghomrassen", "Dehiba", "Remada"],
    },
  ];

  return (
    <div className="mt-2">
      {props.formData.address.state ? (
        <select
          id="city"
          name="city"
          required
          onChange={(e) =>
            props.setFormData({
              ...props.formData,
              address: {
                ...props.formData.address,
                city: e.target.value,
              },
            })
          }
          onFocus={(event) =>
            event.target.style.border === "1px solid red"
              ? (event.target.style.border = "none")
              : null
          }
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 p-2"
        >
          <option selected>Choose a city</option>
          {tunisiaStates
            .find((state) => state.name === props.formData.address.state)
            ?.cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
      ) : (
        <div className="mt-2">
          <input
            type="text"
            id="city"
            disabled
            className="bg-neutral-100 cursor-not-allowed block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 p-2"
          />
        </div>
      )}
    </div>
  );
}

export default CityList;
