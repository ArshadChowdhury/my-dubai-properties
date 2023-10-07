"use client";

let language;

if (typeof sessionStorage !== "undefined" && sessionStorage !== null) {
  language = sessionStorage.getItem("language");
}

export const initialState = {
  lang: language || "en",
  viewType: "grid",
  planList: [],
  showModal: false,
  showContactModal: false,
  openMeetLink: null,
  contactModalInfo: null,
  isZoomSelected: false,
  isMeetSelected: true,
  isDropdownMenuOpen: false,
  filterOpen: false,
  filterRoute: {
    developers: null,
    developmentTypes: null,
    propertyAreas: null,
  },
  singleDevFilterValuesMob: {
    propertyAreas: null,
    propertyTypes: null,
    completions: null,
    beds: null,
    developers: null,
  },

  filterValues: {
    propertyAreas: null,
    developers: null,
    propertyTypes: null,
    completions: null,
    developmentTypes: null,
    bdes: null,
  },
  filterValuesMob: {
    propertyAreas: null,
    developers: null,
    propertyTypes: null,
    completions: null,
    developmentTypes: null,
    bdes: null,
  },
  filterData: [],
  filterSelectReset: false,
  propertyToView: "all",
  query: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setLang":
      return {
        ...state,
        lang: action.item,
      };
    case "setViewType":
      return {
        ...state,
        viewType: action.item,
      };

    case "setPlanList":
      return {
        ...state,
        planList: planlist.concat(action.item),
      };

    case "setShowModal":
      return {
        ...state,
        showModal: action.item,
      };
    case "setShowContactModal":
      return {
        ...state,
        showContactModal: action.item,
      };
    case "setContactModalInfo":
      return {
        ...state,
        contactModalInfo: action.item,
      };
    case "setSingleDevFilterValuesMob":
      return {
        ...state,
        singleDevFilterValuesMob: action.item,
      };
    case "setFilterRoute":
      return {
        ...state,
        filterRoute: action.item,
      };
    case "selectVideoMeeting":
      return {
        ...state,
        openMeetLink: action.item,
      };
    case "setZoomMeeting":
      return {
        ...state,
        isZoomSelected: action.item,
      };
    case "setGoogleMeet":
      return {
        ...state,
        isMeetSelected: action.item,
      };
    case "setDropdownOpen":
      return {
        ...state,
        isDropdownMenuOpen: action.item,
      };
    case "setPropertyAreas":
      return {
        ...state,
        propertyAreas: action.item,
      };
    case "setDevelopers":
      return {
        ...state,
        developers: action.item,
      };
    case "setPropertyTypes":
      return {
        ...state,
        propertyTypes: action.item,
      };
    case "setCompletions":
      return {
        ...state,
        completions: action.item,
      };
    case "setDevelopmentTypes":
      return {
        ...state,
        developmentTypes: action.item,
      };
    case "setFilterValues":
      return {
        ...state,
        filterValues: action.item,
      };
    case "setFilterValuesMob":
      return {
        ...state,
        filterValuesMob: action.item,
      };
    case "setFilterData":
      return {
        ...state,
        filterData: action.item,
      };
    case "setPropertyToView":
      return {
        ...state,
        propertyToView: action.item,
      };
    case "setQuery":
      return {
        ...state,
        query: action.item,
      };

    case "setFilterOpen":
      return {
        ...state,
        filterOpen: action.item,
      };
    case "setFilterSelectReset":
      return {
        ...state,
        filterSelectReset: action.item,
      };

    default:
      return state;
  }
};

export default reducer;
