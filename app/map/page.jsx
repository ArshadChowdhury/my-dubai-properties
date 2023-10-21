"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { places } from "../../services/places";
import PopUpView from "@/components/PopUpView";
import { useStateValue } from "@/components/prev/states/StateProvider";
import { instance } from "@/components/prev/services/apiFunctions";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import LoadingState from "@/components/LoadingState";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXZpaml0c2FoYTI5OTciLCJhIjoiY2xjcDM4ZWpiMXEzYjNybXFlN2ExNWtjYSJ9.l0lzw0rJpo-uIh3v7-NFdQ";

export default function Map() {
  const searchParams = useSearchParams();
  const propertyIdParam = searchParams.get("propertyId");
  const router = useRouter();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(55.2708);
  const [lat, setLat] = useState(25.2048);
  const [zoom, setZoom] = useState(9);
  const [selectedFeature, setSelectedFeature] = useState("All");
  const [markers, setMarkers] = useState([]);
  const [propertyName, setPorpertyName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [areaId, setAreaId] = useState("");
  const [developerName, setDeveloperName] = useState("");
  const [developerId, setDeveloperId] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertyTypeId, setPropertyTypeId] = useState("");
  const [unitSize, setUnitSize] = useState("");
  const [description, setDescription] = useState("");
  const [propertyId, setPropertyId] = useState(propertyIdParam);
  const [popUpImg, setPopUpImg] = useState(
    "https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-1.jpg"
  );

  const [allPlaces, setAllPlaces] = useState([
    {
      propertyType: {
        id: "63fefdc56023b40ac4385d00",
        name: "Villa",
      },
      propertyArea: {
        id: "63fefe6d6023b40ac4385dc3",
        areaName: "Abu Dhabi",
      },
      developmentType: {
        id: "651984de79fcdc27efbf859b",
        name: "OFF PLAN",
      },
      developerType: {
        id: "63ff00c56023b40ac4386188",
        name: "Eagle Hills",
      },
      amenities: {
        description:
          "Ramhan Island’s world-class amenities and facilities will provide an unparalleled lifestyle that will make you pampered by day and privileged by night.",
        features:
          "Waterfront Living#Sandbar#Eco-Parks#Swimmable Crystal Lagoon#Jogging and Running Tracks#Sports and Fitness Centre#Spa & Wellness#Infinity Pool#Floating Villas",
      },
      location: {
        position: [25.2048, 55.2708],
        locDescription:
          "The Ramhan Villas are located in Abu Dhabi and are conveniently accessible to the city’s mainland and other places. Ramhan Island will become one of the most desirable spots in the capital of the United Arab Emirates.",
        nearby: [
          {
            position: [25.2048, 55.2708],
            title: "10 Mins Yas Island",
            icon: "island",
          },
          {
            position: [25.2048, 55.2708],
            title: "15 Mins Sheikh Zayed Grand Mosque",
            icon: "mosque",
          },
          {
            position: [25.2048, 55.2708],
            title: "15 Mins Abu Dhabi Airport",
            icon: "airport",
          },
          {
            position: [25.2048, 55.2708],
            title: "18 Mins Saadiyat Island",
            icon: "island",
          },
          {
            position: [25.2048, 55.2708],
            title: "20 Mins Drive Lovre Abu Dhabi",
            icon: "city",
          },
        ],
      },
      unitType: {
        title: "Bedrooms",
        count: "1",
        size: "4, 5, 6, 7",
      },
      createBy: {
        id: "63fdba8b7e7c44513a8a3b9e",
        fullName: "Bellal Hossain",
      },
      tag: "Feature Launch",
      isFeatured: true,
      _id: "63ff04846023b40ac43861ce",
      propertyNo: 1,
      lang: "en",
      propertyName: "Ramhan Island",
      propertyDescription:
        "The Heavenly Ramhan Island is completely unspoiled and natural, with bays, beaches, and mangrove trees just waiting to be explored by the adventurous traveler. Ramhan By Eagle Hills, is located on an island in Abu Dhabi, is a circular island due to its geological formation.\r\n\r\nThe incredible design of this masterplan features 3, 4, 5, 6 & 7 Bedroom beachfront luxury villas with top-tier facilities, a marina filled with cutting-edge retail and dining options, 5-star accommodations in the form of a hotel and serviced apartments, and a wellness center with open bay views and peaceful surroundings.",
      areaSize: "7,539 sft",
      highlights:
        "Luxury waterfront villas#Starting from AED 6.4M#Hotel and serviced residences#Private beach for every unit#Magnificent sea views#Premium detached villas#World-class Marina#Floating villas on the water#120 Marina Boat Berths",
      completion: "2025",
      startingPrice: 6400000,
      paymentPlan: [
        {
          milestone: "Price starting at AED 6.4M to 24.5M",
          installment: 1,
          percentage: "30%",
          date: "2023-03-01T00:00:00.000Z",
          notes: "1",
        },
        {
          milestone: "EMI",
          installment: 6,
          percentage: "20%",
          date: "2023-03-14T00:00:00.000Z",
          notes: "1",
        },
        {
          milestone: "Handover ",
          installment: 1,
          percentage: "60%",
          date: "2023-03-29T00:00:00.000Z",
          notes: "1",
        },
        {
          milestone: "Pay via cash",
          installment: 1,
          percentage: "100%",
          date: "2023-03-01T00:00:00.000Z",
          notes: "1",
        },
      ],
      brochure: "https://www.africau.edu/images/default/sample.pdf",
      images: [
        {
          type: "cover",
          metaDescription: "cover",
          path: "https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-1.jpg",
        },
        {
          type: "gallery",
          metaDescription: "gallery",
          path: "https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-4.jpg",
        },
        {
          type: "gallery",
          metaDescription: "gallery",
          path: "https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-5.jpg",
        },
        {
          type: "gallery",
          metaDescription: "gallery",
          path: "https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-6.jpg",
        },
        {
          type: "gallery",
          metaDescription: "gallery",
          path: "https://www.offplan-dubai.com/wp-content/uploads/2023/02/ramhan-7.jpg",
        },
      ],
      videos: [
        {
          type: "youtube",
          path: "https://www.youtube.com/watch?v=dcGnNft3nvg&ab_channel=ProvidentRealEstate",
        },
      ],
      createdAt: "2023-03-01T07:53:40.738Z",
      updatedAt: "2023-10-02T11:46:41.392Z",
      __v: 6,
    },
  ]);
  const [{ lang }] = useStateValue();

  const getAllProperties = async () => {
    let records = [];
    let page = 0;
    let totalPages = 0;

    await axios
      .get(`http://my-dubaiproperties.com:3000/api/v1/${lang}/properties`)
      .then((data) => setAllPlaces(data.data.data.properties.data));

    do {
      let { data: response } = await instance.get(`${lang}/properties`, {
        params: { page: ++page },
      });
      totalPages = Math.ceil(response.data.properties.count / 6);
      records = records.concat(response.data.properties.data);
      setAllPlaces(records);
    } while (page < totalPages);
  };

  useEffect(() => {
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new mapboxgl.NavigationControl());

    getAllProperties();
  }, []);

  useEffect(() => {
    markers.forEach((marker) => {
      marker.remove();
    });

    const popup = document.getElementById("popup");
    const mapContainer = document.querySelector("#map-container");

    let selectedMarker = null;
    let selectedMarkerDiv = null;
    let prevColor = null;

    function handleMapContainerClick(event) {
      const isMarker = event.target.closest(".custom-marker");
      if (!isMarker) {
        if (selectedMarker) {
          setPropertyId("");
          popup.style.display = "none";
          selectedMarker.style.backgroundColor = prevColor;
          selectedMarkerDiv.classList.remove("custom-marker-div-active");
          selectedMarkerDiv.classList.add("custom-marker-div");
          selectedMarker.classList.remove("custom-marker-active");
          selectedMarker.classList.add("custom-marker");
          selectedMarker = null;
        }
      }
    }
    mapContainer.addEventListener("click", handleMapContainerClick);

    allPlaces?.forEach((item, index) => {
      if (selectedFeature === "All" || item.tag === selectedFeature) {
        const customMarkerElement = document.createElement("div");
        customMarkerElement.className = "custom-marker-div";

        const customMarkerElement1 = document.createElement("div");
        customMarkerElement1.className = "custom-marker";

        customMarkerElement.appendChild(customMarkerElement1);
        let markerColor;

        if (item.tag === "Feature Launch") {
          customMarkerElement1.style.backgroundColor = "#c7057c";
          markerColor = "#c7057c";
        } else if (item.tag === "Newly Launched") {
          customMarkerElement1.style.backgroundColor = "#15803d";
          markerColor = "#15803d";
        } else if (item.tag === "High Demand") {
          customMarkerElement1.style.backgroundColor = "#1e40af";
          markerColor = "#1e40af";
        } else if (item.tag === "Last Units") {
          customMarkerElement1.style.backgroundColor = "#facc15";
          markerColor = "#facc15";
        } else if (item.tag === "Out Of Stocks") {
          customMarkerElement1.style.backgroundColor = "#dc2626";
          markerColor = "#dc2626";
        }

        let img = item?.images.filter((image) => {
          if (image.type === "cover") {
            return image.path;
          }
        });

        let popUpPropertyName = item?.propertyName;
        let popUpAreaName = item?.propertyArea.areaName;
        let popUpAreaId = item?.propertyArea.id;
        let popUpDeveloperName = item?.developerType.name;
        let popUpDeveloperId = item?.developerType.id;
        let popUpPropertyType = item?.propertyType.name;
        let popUpPropertyTypeId = item?.propertyType.id;
        let popUpUnitSize = item?.unitType.size;
        let popUpDescription = item?.amenities.description;
        let id = item?.propertyNo;

        customMarkerElement.addEventListener("click", (e) => {
          e.stopPropagation();
          setPropertyId(id);
          setPorpertyName(popUpPropertyName);
          setAreaName(popUpAreaName);
          setDeveloperName(popUpDeveloperName);
          setPropertyType(popUpPropertyType);
          setAreaId(popUpAreaId);
          setDeveloperId(popUpDeveloperId);
          setPropertyTypeId(popUpPropertyTypeId);
          setUnitSize(popUpUnitSize);
          setDescription(popUpDescription);
          setPopUpImg(img);
          popup.style.display = "flex";
          popup.style.justifyContent = "center";

          if (selectedMarker) {
            selectedMarker.style.backgroundColor = prevColor;
            selectedMarkerDiv.classList.remove("custom-marker-div-active");
            selectedMarkerDiv.classList.add("custom-marker-div");
            selectedMarker.classList.remove("custom-marker-active");
            selectedMarker.classList.add("custom-marker");
          }
          customMarkerElement1.style.backgroundColor = "#00182e";
          customMarkerElement.classList.remove("custom-marker-div");
          customMarkerElement.classList.add("custom-marker-div-active");
          customMarkerElement1.classList.remove("custom-marker");
          customMarkerElement1.classList.add("custom-marker-active");

          selectedMarker = customMarkerElement1;
          selectedMarkerDiv = customMarkerElement;
          prevColor = markerColor;
        });

        if (propertyIdParam == id) {
          function click(e) {
            setAreaId(popUpAreaId);
            setDeveloperId(popUpDeveloperId);
            setPropertyTypeId(popUpPropertyTypeId);
            setPorpertyName(popUpPropertyName);
            setAreaName(popUpAreaName);
            setDeveloperName(popUpDeveloperName);
            setPropertyType(popUpPropertyType);
            setUnitSize(popUpUnitSize);
            setDescription(popUpDescription);
            setPopUpImg(img);
            popup.style.display = "flex";
            popup.style.justifyContent = "center";

            customMarkerElement1.style.backgroundColor = "#00182e";
            customMarkerElement.classList.remove("custom-marker-div");
            customMarkerElement.classList.add("custom-marker-div-active");
            customMarkerElement1.classList.remove("custom-marker");
            customMarkerElement1.classList.add("custom-marker-active");

            selectedMarker = customMarkerElement1;
            selectedMarkerDiv = customMarkerElement;
            prevColor = markerColor;
          }
          click();
        }

        const marker = new mapboxgl.Marker({ element: customMarkerElement })
          .setLngLat([item.location.position[1], item.location.position[0]])
          .addTo(map.current);

        setMarkers((prevMarkers) => [...prevMarkers, marker]);
      }
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    return () => {
      mapContainer.removeEventListener("click", handleMapContainerClick);

      markers.forEach((marker) => {
        marker.remove();
        popup.style.display = "none";
      });
    };
  }, [selectedFeature, allPlaces]);

  const handleFilterClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <>
      <div className="w-full flex items-center overflow-x-scroll no-scrollbar mt-5 absolute z-10">
        <div onClick={() => router.back()} className="back-button">
          <ArrowBackIcon />
          <div className="ml-2">Back</div>
        </div>

        <div
          onClick={() => handleFilterClick("All")}
          className={`features-div ${
            selectedFeature === "All" ? "active" : ""
          }`}
        >
          <div>All</div>
        </div>

        <div
          onClick={() => handleFilterClick("Feature Launch")}
          className={`features-div ${
            selectedFeature === "Feature Launch" ? "active" : ""
          }`}
        >
          <div className="feature bg-[#c7057c]"></div>
          <div className="w-36 md:w-34 "> Feature Launch</div>
        </div>

        <div
          onClick={() => handleFilterClick("Newly Launched")}
          className={`features-div ${
            selectedFeature === "Newly Launched" ? "active" : ""
          }`}
        >
          <div className="feature bg-green-700"></div>
          <div className="w-36 md:w-34">Newly Launched</div>
        </div>

        <div
          onClick={() => handleFilterClick("High Demand")}
          className={`features-div ${
            selectedFeature === "High Demand" ? "active" : ""
          }`}
        >
          <div className="feature bg-blue-800"></div>
          <div className="w-32 md:w-30">High Demand</div>
        </div>

        <div
          onClick={() => handleFilterClick("Last Units")}
          className={`features-div ${
            selectedFeature === "Last Units" ? "active" : ""
          }`}
        >
          <div className="feature bg-yellow-400"></div>
          <div className="w-24 md:w-22">Last Units</div>
        </div>

        <div
          onClick={() => handleFilterClick("Out Of Stocks")}
          className={`features-div ${
            selectedFeature === "Out Of Stocks" ? "active" : ""
          }`}
        >
          <div className="feature bg-red-600"></div>
          <div className="w-32 md:w-30">Out Of Stocks</div>
        </div>
      </div>

      <div
        ref={mapContainer}
        id="map-container"
        className="!w-full !h-screen"
      />

      <div id="popup" className="w-full absolute bottom-16 hidden">
        <PopUpView
          areaId={areaId}
          developerId={developerId}
          propertyTypeId={propertyTypeId}
          propertyId={propertyId}
          coverImage={popUpImg}
          propertyName={propertyName}
          areaName={areaName}
          developerName={developerName}
          propertyType={propertyType}
          unitSize={unitSize}
          description={description}
        />
      </div>
    </>
  );
}
