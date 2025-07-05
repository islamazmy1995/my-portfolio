// import { createContext } from "react";

// const AppContext = createContext({
//   sharedState: {
//     portfolio: {
//       NavBar: {
//         IntervalEvent: null,
//         scrolling: null,
//         scrollSizeY: null,
//       },
//       Scrolling: {
//         IntervalEvent: null,
//       },
//     },
//     userdata: {
//       timerCookieRef: null,
//       windowSizeTracker: null,
//       mousePositionTracker: null,
//     },
//     typing: {
//       keyboardEvent: null,
//       eventInputLostFocus: null,
//     },
//     finishedLoading: false,
//   },
//   setSharedState: () => {},
// });

// export default AppContext;


import { createContext } from "react";

interface SharedState {
  portfolio: {
    NavBar: {
      IntervalEvent: null | any;
      scrolling: null | any;
      scrollSizeY: null | any;
    };
    Scrolling: {
      IntervalEvent: null | any;
    };
  };
  userdata: {
    timerCookieRef: null | any;
    windowSizeTracker: null | any;
    mousePositionTracker: null | any;
  };
  typing: {
    keyboardEvent: null | any;
    eventInputLostFocus: null | any;
  };
  finishedLoading: boolean;
}

interface AppContextProps {
  sharedState: SharedState;
  setSharedState: (state: SharedState) => void;
}

const AppContext = createContext<AppContextProps>({
  sharedState: {
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: null,
      windowSizeTracker: null,
      mousePositionTracker: null,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  },
  setSharedState: () => {},
});

export default AppContext;

