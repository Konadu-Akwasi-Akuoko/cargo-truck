export function calculateMovingRegionCost(
  fromRegion: string,
  toRegion: string
): number {
  let cost = 0;

  switch (fromRegion + "-" + toRegion) {
    case "ahafo-ashanti":
    case "ashanti-ahafo":
      cost = 10;
      break;
    case "ahafo-bonoEast":
    case "bonoEast-ahafo":
      cost = 11;
      break;
    case "ahafo-brongAhafo":
    case "brongAhafo-ahafo":
      cost = 12;
      break;
    case "ahafo-central":
    case "central-ahafo":
      cost = 13;
      break;
    case "ahafo-eastern":
    case "eastern-ahafo":
      cost = 14;
      break;
    case "ahafo-greaterAccra":
    case "greaterAccra-ahafo":
      cost = 15;
      break;
    case "ahafo-northEast":
    case "northEast-ahafo":
      cost = 16;
      break;
    case "ahafo-northern":
    case "northern-ahafo":
      cost = 17;
      break;
    case "ahafo-oti":
    case "oti-ahafo":
      cost = 18;
      break;
    case "ahafo-savannah":
    case "savannah-ahafo":
      cost = 19;
      break;
    case "ahafo-upperEast":
    case "upperEast-ahafo":
      cost = 20;
      break;
    case "ahafo-upperWest":
    case "upperWest-ahafo":
      cost = 21;
      break;
    case "ahafo-western":
    case "western-ahafo":
      cost = 22;
      break;
    case "ahafo-westernNorth":
    case "westernNorth-ahafo":
      cost = 23;
      break;
    case "ahafo-volta":
    case "volta-ahafo":
      cost = 24;
      break;

    case "ashanti-bonoEast":
    case "bonoEast-ashanti":
      cost = 25;
      break;
    case "ashanti-brongAhafo":
    case "brongAhafo-ashanti":
      cost = 26;
      break;
    case "ashanti-central":
    case "central-ashanti":
      cost = 27;
      break;
    case "ashanti-eastern":
    case "eastern-ashanti":
      cost = 28;
      break;
    case "ashanti-greaterAccra":
    case "greaterAccra-ashanti":
      cost = 29;
      break;
    case "ashanti-northEast":
    case "northEast-ashanti":
      cost = 30;
      break;
    case "ashanti-northern":
    case "northern-ashanti":
      cost = 31;
      break;
    case "ashanti-oti":
    case "oti-ashanti":
      cost = 32;
      break;
    case "ashanti-savannah":
    case "savannah-ashanti":
      cost = 33;
      break;
    case "ashanti-upperEast":
    case "upperEast-ashanti":
      cost = 34;
      break;
    case "ashanti-upperWest":
    case "upperWest-ashanti":
      cost = 35;
      break;
    case "ashanti-western":
    case "western-ashanti":
      cost = 36;
      break;
    case "ashanti-westernNorth":
    case "westernNorth-ashanti":
      cost = 37;
      break;
    case "ashanti-volta":
    case "volta-ashanti":
      cost = 38;
      break;

    case "bonoEast-brongAhafo":
    case "brongAhafo-bonoEast":
      cost = 39;
      break;
    case "bonoEast-central":
    case "central-bonoEast":
      cost = 40;
      break;
    case "bonoEast-eastern":
    case "eastern-bonoEast":
      cost = 11;
      break;
    case "bonoEast-greaterAccra":
    case "greaterAccra-bonoEast":
      cost = 12;
      break;
    case "bonoEast-northEast":
    case "northEast-bonoEast":
      cost = 13;
      break;
    case "bonoEast-northern":
    case "northern-bonoEast":
      cost = 14;
      break;
    case "bonoEast-oti":
    case "oti-bonoEast":
      cost = 15;
      break;
    case "bonoEast-savannah":
    case "savannah-bonoEast":
      cost = 26;
      break;
    case "bonoEast-upperEast":
    case "upperEast-bonoEast":
      cost = 17;
      break;
    case "bonoEast-upperWest":
    case "upperWest-bonoEast":
      cost = 18;
      break;
    case "bonoEast-western":
    case "western-bonoEast":
      cost = 19;
      break;
    case "bonoEast-westernNorth":
    case "westernNorth-bonoEast":
      cost = 10;
      break;
    case "bonoEast-volta":
    case "volta-bonoEast":
      cost = 11;
      break;

    case "brongAhafo-central":
    case "central-brongAhafo":
      cost = 12;
      break;
    case "brongAhafo-eastern":
    case "eastern-brongAhafo":
      cost = 13;
      break;
    case "brongAhafo-greaterAccra":
    case "greaterAccra-brongAhafo":
      cost = 14;
      break;
    case "brongAhafo-northEast":
    case "northEast-brongAhafo":
      cost = 15;
      break;
    case "brongAhafo-northern":
    case "northern-brongAhafo":
      cost = 16;
      break;
    case "brongAhafo-oti":
    case "oti-brongAhafo":
      cost = 17;
      break;
    case "brongAhafo-savannah":
    case "savannah-brongAhafo":
      cost = 28;
      break;
    case "brongAhafo-upperEast":
    case "upperEast-brongAhafo":
      cost = 19;
      break;
    case "brongAhafo-upperWest":
    case "upperWest-brongAhafo":
      cost = 20;
      break;
    case "brongAhafo-western":
    case "western-brongAhafo":
      cost = 21;
      break;
    case "brongAhafo-westernNorth":
    case "westernNorth-brongAhafo":
      cost = 22;
      break;
    case "brongAhafo-volta":
    case "volta-brongAhafo":
      cost = 23;
      break;

    case "central-eastern":
    case "eastern-central":
      cost = 24;
      break;
    case "central-greaterAccra":
    case "greaterAccra-central":
      cost = 25;
      break;
    case "central-northEast":
    case "northEast-central":
      cost = 26;
      break;
    case "central-northern":
    case "northern-central":
      cost = 27;
      break;
    case "central-oti":
    case "oti-central":
      cost = 28;
      break;
    case "central-savannah":
    case "savannah-central":
      cost = 29;
      break;
    case "central-upperEast":
    case "upperEast-central":
      cost = 30;
      break;
    case "central-upperWest":
    case "upperWest-central":
      cost = 31;
      break;
    case "central-western":
    case "western-central":
      cost = 32;
      break;
    case "central-westernNorth":
    case "westernNorth-central":
      cost = 33;
      break;
    case "central-volta":
    case "volta-central":
      cost = 34;
      break;

    case "eastern-greaterAccra":
    case "greaterAccra-eastern":
      cost = 35;
      break;
    case "eastern-northEast":
    case "northEast-eastern":
      cost = 36;
      break;
    case "eastern-northern":
    case "northern-eastern":
      cost = 37;
      break;
    case "eastern-oti":
    case "oti-eastern":
      cost = 38;
      break;
    case "eastern-savannah":
    case "savannah-eastern":
      cost = 30;
      break;
    case "eastern-upperEast":
    case "upperEast-eastern":
      cost = 40;
      break;
    case "eastern-upperWest":
    case "upperWest-eastern":
      cost = 11;
      break;
    case "eastern-western":
    case "western-eastern":
      cost = 17;
      break;
    case "eastern-westernNorth":
    case "westernNorth-eastern":
      cost = 14;
      break;
    case "eastern-volta":
    case "volta-eastern":
      cost = 18;
      break;

    case "greaterAccra-northEast":
    case "northEast-greaterAccra":
      cost = 15;
      break;
    case "greaterAccra-northern":
    case "northern-greaterAccra":
      cost = 19;
      break;
    case "greaterAccra-oti":
    case "oti-greaterAccra":
      cost = 11;
      break;
    case "greaterAccra-savannah":
    case "savannah-greaterAccra":
      cost = 20;
      break;
    case "greaterAccra-upperEast":
    case "upperEast-greaterAccra":
      cost = 13;
      break;
    case "greaterAccra-upperWest":
    case "upperWest-greaterAccra":
      cost = 13;
      break;
    case "greaterAccra-western":
    case "western-greaterAccra":
      cost = 17;
      break;
    case "greaterAccra-westernNorth":
    case "westernNorth-greaterAccra":
      cost = 14;
      break;
    case "greaterAccra-volta":
    case "volta-greaterAccra":
      cost = 18;
      break;

    case "northEast-northern":
    case "northern-northEast":
      cost = 19;
      break;
    case "northEast-oti":
    case "oti-northEast":
      cost = 11;
      break;
    case "northEast-savannah":
    case "savannah-northEast":
      cost = 20;
      break;
    case "northEast-upperEast":
    case "upperEast-northEast":
      cost = 13;
      break;
    case "northEast-upperWest":
    case "upperWest-northEast":
      cost = 13;
      break;
    case "northEast-western":
    case "western-northEast":
      cost = 17;
      break;
    case "northEast-westernNorth":
    case "westernNorth-northEast":
      cost = 14;
      break;
    case "northEast-volta":
    case "volta-northEast":
      cost = 18;
      break;

    case "northern-oti":
    case "oti-northern":
      cost = 11;
      break;
    case "northern-savannah":
    case "savannah-northern":
      cost = 20;
      break;
    case "northern-upperEast":
    case "upperEast-northern":
      cost = 13;
      break;
    case "northern-upperWest":
    case "upperWest-northern":
      cost = 13;
      break;
    case "northern-western":
    case "western-northern":
      cost = 17;
      break;
    case "northern-westernNorth":
    case "westernNorth-northern":
      cost = 14;
      break;
    case "northern-volta":
    case "volta-northern":
      cost = 18;
      break;

    case "oti-savannah":
    case "savannah-oti":
      cost = 20;
      break;
    case "oti-upperEast":
    case "upperEast-oti":
      cost = 13;
      break;
    case "oti-upperWest":
    case "upperWest-oti":
      cost = 13;
      break;
    case "oti-western":
    case "western-oti":
      cost = 17;
      break;
    case "oti-westernNorth":
    case "westernNorth-oti":
      cost = 14;
      break;
    case "oti-volta":
    case "volta-oti":
      cost = 18;
      break;

    case "savannah-upperEast":
    case "upperEast-savannah":
      cost = 13;
      break;
    case "savannah-upperWest":
    case "upperWest-savannah":
      cost = 13;
      break;
    case "savannah-western":
    case "western-savannah":
      cost = 17;
      break;
    case "savannah-westernNorth":
    case "westernNorth-savannah":
      cost = 14;
      break;
    case "savannah-volta":
    case "volta-savannah":
      cost = 18;
      break;

    case "upperEast-upperWest":
    case "upperWest-upperEast":
      cost = 13;
      break;
    case "upperEast-western":
    case "western-upperEast":
      cost = 17;
      break;
    case "upperEast-westernNorth":
    case "westernNorth-upperEast":
      cost = 14;
      break;
    case "upperEast-volta":
    case "volta-upperEast":
      cost = 18;
      break;

    case "upperWest-western":
    case "western-upperWest":
      cost = 17;
      break;
    case "upperWest-westernNorth":
    case "westernNorth-upperWest":
      cost = 14;
      break;
    case "upperWest-volta":
    case "volta-upperWest":
      cost = 18;
      break;

    case "western-westernNorth":
    case "westernNorth-western":
      cost = 14;
      break;
    case "western-volta":
    case "volta-western":
      cost = 18;
      break;

    case "westernNorth-volta":
    case "volta-westernNorth":
      cost = 18;
      break;
    default:
      console.log("Invalid region pair");
  }

  return cost;
}
