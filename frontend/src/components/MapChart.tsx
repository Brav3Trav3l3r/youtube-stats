import {
  BORDER,
  LIGHT_BORDER,
  LIGHT_PRIMARY,
  LIGHT_PRIMARY_FOREGROUND,
  PRIMARY,
  PRIMARY_FOREGROUND,
} from "@/lib/constants";
import { useTheme } from "@/store/themeContext";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
} from "react-simple-maps";

const geoUrl = "/features.json";

export default function MapChart() {
  const [data, setData] = useState([]);
  const { theme } = useTheme();

  const colorScale = scaleLinear(
    [0.29, 0.68],
    [
      theme == "dark" ? PRIMARY_FOREGROUND : LIGHT_PRIMARY_FOREGROUND,
      theme == "dark" ? PRIMARY : LIGHT_PRIMARY,
    ]
  );

  useEffect(() => {
    csv(`/vulnerability.csv`).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className="flex-[2] bg-card">
      <ComposableMap
        height={400}
        projectionConfig={{
          rotate: [-10, 0, 0],
          scale: 140,
        }}
        className="border-red-500"
      >
        <Sphere
          stroke={theme == "dark" ? BORDER : LIGHT_BORDER}
          strokeWidth={0.5}
        />
        <Graticule
          stroke={theme == "dark" ? BORDER : LIGHT_BORDER}
          strokeWidth={0.5}
        />

        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = data.find((s) => s.ISO3 === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={
                      d
                        ? colorScale(d["2017"])
                        : theme == "dark"
                        ? BORDER
                        : LIGHT_BORDER
                    }
                  />
                );
              })
            }
          </Geographies>
        )}
      </ComposableMap>
    </div>
  );
}
