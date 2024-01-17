const data = [
  {
    "Unternehmen": "Papierwerk Pol",
    "Land": "Polen",
    "EmissionenInMT": 25.3
  },
  {
    "Unternehmen": "Kraftwerk Jope",
    "Land": "Japan",
    "EmissionenInMT": 33.1
  },
  {
    "Unternehmen": "Schockoladenland Liver",
    "Land": "England",
    "EmissionenInMT": 15.9
  },
  {
    "Unternehmen": "Themenpark Abenteuerwelt",
    "Land": "Deutschland",
    "EmissionenInMT": 12.8
  },
  {
    "Unternehmen": "Groß-Kafferösterei Ita",
    "Land": "Italien",
    "EmissionenInMT": 6.8
  },
  {
    "Unternehmen": "Großplantage Alit",
    "Land": "Ägypten",
    "EmissionenInMT": 12.4
  },
  {
    "Unternehmen": "Fischereigroßhandel Bernd",
    "Land": "Niederlande",
    "EmissionenInMT": 2.7
  },
  {
    "Unternehmen": "Traumschiff Siewa",
    "Land": "Schweiz",
    "EmissionenInMT": 11
  },
  {
    "Unternehmen": "Stromgroßanbieter Finnley",
    "Land": "Finnland",
    "EmissionenInMT": 5.2
  },
  {
    "Unternehmen": "Fluggesellschaft Irly",
    "Land": "Irland",
    "EmissionenInMT": 10.9
  },
  {
    "Unternehmen": "La Baguette de Großhandelsbäckerei",
    "Land": "Frankreich",
    "EmissionenInMT": 7.4
  },
  {
    "Unternehmen": "Skiverbund Ötli",
    "Land": "Österreich",
    "EmissionenInMT": 6.1
  },
  {
    "Unternehmen": "Ölhandel Rosia",
    "Land": "Russland",
    "EmissionenInMT": 26.1
  },
  {
    "Unternehmen": "It-Großhandel Hibu",
    "Land": "Indien",
    "EmissionenInMT": 16.8
  },
  {
    "Unternehmen": "Fluggesellschaft Türku",
    "Land": "Türkei",
    "EmissionenInMT": 12.9
  },
  {
    "Unternehmen": "Ölhandel Kadi",
    "Land": "Kanada",
    "EmissionenInMT": 6.8
  },
  {
    "Unternehmen": "Forscherstaion Antika",
    "Land": "Antarktika",
    "EmissionenInMT": 0.6
  },
  {
    "Unternehmen": "Feuerhilfewerk Austrila",
    "Land": "Australien",
    "EmissionenInMT": 5.8
  },
  {
    "Unternehmen": "Großhandel Chi-Chi Kleidung",
    "Land": "China",
    "EmissionenInMT": 14.5
  },
  {
    "Unternehmen": "Tier-Großhändler Nabi",
    "Land": "Namibia",
    "EmissionenInMT": 2.1
  },
  {
    "Unternehmen": "Drogenbaron Mekio",
    "Land": "Mexiko",
    "EmissionenInMT": 2.4
  },
  {
    "Unternehmen": "Mineralölunternehmen Braso",
    "Land": "Brasilien",
    "EmissionenInMT": 32
  },
  {
    "Unternehmen": "Souks-Großhandel Roko",
    "Land": "Marokko",
    "EmissionenInMT": 19.5
  },
  {
    "Unternehmen": "Autohersteller Ska",
    "Land": "Südkorea",
    "EmissionenInMT": 29
  },
  {
    "Unternehmen": "Basar-GRoßhandel Irik",
    "Land": "Iran",
    "EmissionenInMT": 11.1
  },
  {
    "Unternehmen": "Outlet Spina",
    "Land": "Spanien",
    "EmissionenInMT": 4.2
  },
  {
    "Unternehmen": "Exporthandel Veiu",
    "Land": "Venezuela",
    "EmissionenInMT": 3.8
  },
  {
    "Unternehmen": "Elektrohandel Vitna",
    "Land": "Vietnam",
    "EmissionenInMT": 9.4
  }
]

const getData = (filterBy, filterValue, sortAsc) => {
  let filtered = data;
  if (filterBy) {
    filtered = filtered.filter((dataSet) => dataSet[filterBy].toLowerCase().includes(filterValue.toLowerCase()));
  }

  return filtered.sort((a, b) => {
    if (a[filterBy] === b[filterBy]) return 0;

    if (sortAsc) {
      return a[filterBy] > b[filterBy] ? 1 : -1;
    }

    return  a[filterBy] > b[filterBy] ? -1 : 1;
  });
}

const renderTable = () => {
  const filterBy = document.querySelector('select[name="filterBy"]').value;
  const filterValue = document.querySelector('input[name="filterValue"]').value;
  const filterAsc = document.querySelector('select[name="orderAsc"]').value === "true";

  const tableData = getData(filterBy, filterValue, filterAsc);

  let html = "";
  tableData.forEach((dataSet) => {
    html += `<tr><td scope="row">${dataSet.Land}</td><td>${dataSet.Unternehmen}</td><td>${dataSet.EmissionenInMT}</td></tr>`;
  });

  document.getElementById("tableBody").innerHTML = html;
}

renderTable();