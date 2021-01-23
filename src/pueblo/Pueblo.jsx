
import './pueblo.css';

import { useEffect, useState } from 'react';

function Pueblo({ObjetImages, zone, setZonesArrow}) {
  
  const [nube1Position, setNube1Position] = useState("matrix(.8448 0 0 .74304 50.37 155.213)");

    useEffect(() => {
      if(zone === 'pueblo') setZonesArrow(()=>['trono', undefined]);
    },[zone]);

    if(zone !== 'pueblo') return false;
    
    return (<div className="Pueblo">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg8"
      width="1920"
      height="1080"
      version="1.1"
      viewBox="0 0 508 285.75"
      className="main-svg"
    >
      <image
          id="image860"
          width="508"
          height="285.75"
          x="0"
          y="0"
          fill="none"
          stroke="none"
          preserveAspectRatio="none"
          href={ObjetImages.current['pueblo']}
      ></image>
      <defs id="defs2">
        <filter
          id="filter968"
          width="1"
          height="1"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur970"
            stdDeviation="0"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g id="layer1" strokeOpacity="1">
        <path
          id="persona"
          fill="red"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M40.491 208.47l.401 30.736 13.915-.23-3.591-35z"
          opacity="0"
        ></path>
        <path
          id="iglu"
          fill="#fe0"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M184.683 191.632l6.95 10.156-2.673 33.41-13.898 5.88-42.014-.496v-30.616l17.198-1.701 17.197-9.26-.944-5.292-17.01-10.395-1.7-7.748 10.583 3.59 9.638-5.669-4.157-6.992-17.576-10.206 2.079-5.858 9.827.566 9.26-6.047-8.967-6.079 2.42-11.922 14.433.535.267 18.976 6.147 1.069 13.096 28.33z"
          opacity="0"
        ></path>
        <path
          id="casa1"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M188.96 235.197l33.943.936-.267-22.585 2.672-3.875-6.548-29.667-25.625-1.496-8.452 13.122 6.95 10.157z"
          opacity="0"
        ></path>
        <path
          id="casa2"
          fill="#1bff00"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M222.903 236.133h19.243l-1.336-15.235 3.073-2.94L241.211 207l-.134-16.437-7.216-2.539-13.189.645 4.636 21.004-2.672 3.875z"
          opacity="0"
        ></path>
        <path
          id="casa4"
          fill="#fa0"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M376.316 238.939c-.048-2.585-48.044.509-48.044.509l1.134-34.018-5.102-.945 1.511-4.725 16.82-25.89 10.183-.33-5.368 7.401 2.406 4.01 9.087-5.079.267 6.682 5.88-1.336-17.64 20.312.535 4.811 8.82-3.474 1.603 5.078 6.682-.268 1.337 8.286 6.949-1.604 2.405-8.285z"
          opacity="0"
        ></path>
        <path
          id="casa3"
          fill="#ff0017"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          d="M328.272 239.448l-24.568-.19 2.268-25.701-3.78-.945 13.607-22.49 18.426-3.307-8.41 12.945-1.511 4.725 5.102.945z"
          opacity="0"
        ></path>
        <g
          id="nube4"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.3367 -.03503 .03983 .29615 236.323 109.819)"
        >
          <path
            id="path924"
            fill="#fff"
            d="M193.146-282.726c-11.994-2.71-18.324 1.346-53.295 14.363-34.97 13.017-18.899 35.53-21.922 41.577-3.024 6.048 5.266 31.587 21.922 43.846 16.656 12.258 52.498-15.41 75.595-14.364 23.098 1.047 31.194-15.914 52.917-18.898 21.723-2.985 57.704 18.846 74.083 5.291 16.38-13.555 40.448-24.468 34.774-41.577-5.674-17.109-71.06-2.268-74.839-2.268-3.78 0 18.083-22.132-50.649-22.679-68.732-.546-48.734 3.808-37.797-3.023 10.936-6.831-8.796.441-20.79-2.268z"
          ></path>
          <path
            id="path926"
            fill="#d2d2d2"
            d="M374.196-229.054c-8.345-9.827-30.826-3.158-46.113-3.023-15.287.135-41.2 3.78-45.357 3.78-4.158 0-80.385-7.092-107.345 0-26.96 7.091-42.333 26.458-52.16 29.482-9.828 3.023-10.088 10.384 4.535 22.678s57.42 5.505 91.47 2.268c34.051-3.237 85.515-21.435 111.125-24.19 25.61-2.756 31.939 8.058 40.822 0 8.883-8.06 11.369-21.168 3.023-30.995z"
          ></path>
        </g>
        <g
          id="nube3"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.33288 0 0 .1952 128.366 134.246)"
        >
          <path
            id="path932"
            fill="#fff"
            d="M300.411-359.21c-13.665.625-31.065 8.321-39.556 18.174-8.491 9.853-7.483 25.658-9.622 33.142-2.138 7.483-4.276 33.14-14.967 51.315-10.69 18.175-22.183 14.25-20.312 26.727 1.871 12.477 27.796 24.589 34.21 24.589 6.415 0 35.714 3.418 42.763 9.622 7.05 6.204-12.62-2.246 4.277 11.76 16.896 14.005 85.526 9.621 86.595 2.138 1.07-7.484 27.067-7.414 35.28-12.83 8.212-5.415 9.621-6.414 27.796 7.484 18.174 13.898 38.486 8.553 47.04-1.069 8.552-9.621 12.828-8.552 18.173-21.381 5.346-12.83 40.978-38.261 45.97-51.316 4.993-13.055 0-11.76 0-14.967 0-3.207 29.935-4.276-1.068-31.003-31.004-26.727-72.698-53.454-80.181-56.662-7.484-3.207-19.97 14.499-34.21 18.175-14.241 3.676-25.659-16.036-40.626-12.83-14.967 3.208-47.801 13.164-65.213 11.76-17.413-1.403-22.684-13.453-36.349-12.828z"
          ></path>
          <path
            id="path934"
            fill="#d3d3d3"
            d="M570.888-276.891c-1.604 2.138-85.476 10.907-109.046 16.036-23.57 5.13-4.277 9.622-33.142 9.622-28.865 0-24.588 8.552-37.417 0-12.83-8.553-24.59-12.83-33.142-28.865-8.552-16.037-6.414-23.52-19.243-23.52-12.83 0-13.898 6.414-20.313 11.76-6.414 5.345-8.335 8.525-11.76 18.174-3.424 9.65 1.07 34.21-4.276 39.556-5.345 5.345-33.141 11.76-49.177 12.829-16.037 1.069-14.968 2.138-17.106 6.414-2.138 4.277-5.345 18.175 6.415 27.796 11.76 9.622-2.138 6.415 38.487 7.484s120.805 20.312 125.082 21.381c4.276 1.07 91.94 0 94.079-5.345 2.138-5.345 20.312 4.276 27.796-12.829 7.483-17.105 31.003-19.243 31.003-33.141s20.606-36.966 20.312-49.178c-.294-12.212-6.949-20.312-8.552-18.174z"
          ></path>
        </g>
        <g
          id="nube2"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.7942 -.08637 .0982 .69853 -68.103 221.414)"
        >
          <path
            id="path940"
            fill="#fff"
            d="M293.73-223.437c.305-2.362-1.616-6.248.534-8.82 2.15-2.573 8.889-.039 10.958-2.673 2.069-2.634 2.94-8.82 0-8.82s-5.91-2.184-9.355-4.276c-3.445-2.092-8.82-8.018-10.958-8.553-2.138-.534-12.554.203-15.234 3.207-2.68 3.005 2.846 5.758-.802 8.553-3.648 2.795-13.096-3.207-18.709-3.207-5.612 0-34.351 2.747-46.772 4.81-12.42 2.064-23.078 1.982-27.796 6.415s-6.27 4.502-2.94 9.89c3.33 5.387 18.289 4.3 27.262 4.81 8.972.51 15.198-1.786 26.192-1.604 10.994.183 28.461 2.833 39.556 3.742 11.095.91 22.688 5.16 26.994 1.871 4.307-3.288.763-2.984 1.07-5.345z"
          ></path>
          <path
            id="path942"
            fill="#d3d3d3"
            d="M304.687-233.059c.194-3.382-2.762-6.84-5.345-7.216-2.583-.377-2.406 2.672-5.346 4.009-2.94 1.336-8.74 2.314-11.76 4.009-3.018 1.695-3.213 4.956-6.414 5.345-3.2.39-5.345-4.009-9.889-4.81-4.543-.802-7.072 3.515-9.889 4.276-2.816.76-2.405.801-6.682.801-4.276 0-16.036-4.009-17.64-4.009-1.603 0-5.88 2.94-11.492 2.94-5.613 0-34.886-5.31-40.358.802-5.471 6.113-2.026 6.092.802 8.82 2.829 2.728 11.45.533 14.7.802s3.742 0 4.81.534c1.07.535 13.782-1.902 17.64-1.603 3.86.298 2.614.53 5.346 1.336s5.17 2.882 10.958 3.742c5.789.86 17.46-.699 23.52-.802 6.06-.103 10.423.267 12.829 0 2.405-.267 24.076 2.365 27.796-2.405 3.72-4.77-2.296-5.14-1.337-8.286.96-3.146 7.557-4.903 7.751-8.285z"
          ></path>
        </g>
        <g
          id="nube5"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeWidth="0.265"
          transform="matrix(.83655 0 0 .73578 71.625 194.045)"
        >
          <path
            id="path944"
            fill="#fff"
            d="M483.49-163.569c1.363-2.983 6.28-6.019 3.742-10.156-2.538-4.137-16.036-2.673-18.174-2.138-2.138.534-19.187 1.884-24.322 1.069-5.134-.815-6.19.124-6.414-2.406-.223-2.53 5.167-2.685 7.216-4.276 2.05-1.591 5.848-1.917 5.078-5.078-.769-3.162 3.475-2.94-11.76-3.742-15.234-.802-30.2-3.207-31.805-2.138-1.603 1.069-2.94 7.483-4.543 7.483-1.604 0-23.253 0-25.658.802-2.405.802-10.423 5.078-10.958 6.147-.535 1.07-4.09-.373-2.94 4.277s19.778 10.423 20.847 10.958c1.07.534 18.453 4.182 24.054 5.613 5.602 1.43 8.286 1.069 9.622 2.672 1.336 1.604 12.027 7.484 13.63 7.484 1.604 0 17.106 1.87 18.175 1.87 1.07 0 17.907-4.543 18.976-4.81 1.07-.267 8.435-3.386 10.958-5.88 2.524-2.494 2.914-4.768 4.277-7.751z"
          ></path>
          <path
            id="path946"
            fill="#d3d3d3"
            d="M401.172-175.863c8.453.8 9.96-.207 12.027 1.87 2.066 2.078.012 3.712.802 5.346.789 1.634-.803 1.738 3.741 4.009 4.545 2.271 22.18-1.815 24.856 2.673 2.676 4.488-4.237 3.151-2.405 5.88 1.832 2.728 10.283.549 13.363 0 3.081-.55-.688-.2 5.079-1.871 5.767-1.671 24.453-8.904 29.934-6.415 5.48 2.49 2.748 3.352 2.672 4.811-.075 1.46-1.71 1.478-1.87 2.673-.161 1.195 1.695 2.272 1.336 3.742-.36 1.47-2.584 1.959-3.742 3.474-1.158 1.515 7.821-1.296-2.94 5.613-10.76 6.908-59.703 9.37-70.292 3.741-10.588-5.628.535-1.336-.802-1.336-1.336 0-8.417-4.165-8.82-6.682-.402-2.516 2.878-1.51 2.406-3.474-.472-1.964-3.22-2.767-6.949-3.742-3.73-.975-12.19 1.57-15.234-.267-3.046-1.837-1.322-3.893-2.94-5.346-1.62-1.452-5.678-1.007-6.415-2.672-.736-1.665 2.918-1.2 1.337-3.742-1.582-2.542-11.128.45-13.898-1.604-2.771-2.053-3.124-4.548-2.673-6.147.45-1.598-4.045.12 2.673-1.87 6.717-1.992 30.3.535 38.754 1.336z"
          ></path>
        </g>
        <g id="nube1" transform={nube1Position}>
          <g
            id="g958"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.265"
            transform="translate(-.802 1.07)"
          >
            <path
              id="path954"
              fill="#fff"
              d="M103.376-110.558c-1.432-1.67-.755-2.646-5.48-2.646-4.725 0-10.266 1.538-15.686 2.079-5.42.541-16.064 1.134-16.82 1.134-.756 0 .504-1.028-5.859-1.323-6.362-.295-27.062.61-31.939 4.158-4.876 3.547.685 2.057-1.7 3.59-2.386 1.534-8.95-.61-13.04.19-4.092.8-8.803 2.91-11.151 4.346-2.348 1.437-.64 1.526-3.402 3.024-2.762 1.499-11.689 1.2-13.796 3.78-2.107 2.58-.378 4.913-.378 5.67 0 .755-.76 2.622 2.268 4.157C-10.58-80.864-.19-84.478 1.89-84.478c2.079 0 27.403-5.48 31.56-5.48 4.159 0 22.301-1.134 25.325-1.701 3.024-.567 21.14-2.71 28.915-4.914 7.776-2.204 15.88-3.229 17.765-7.181 1.886-3.953-.646-5.134-2.079-6.804z"
            ></path>
            <path
              id="path952"
              fill="#d3d3d3"
              d="M108.48-103.565c1.414-3.904-.373-6.895-4.537-8.316-4.163-1.42-12.095 6.804-15.497 6.804-3.401 0-16.117.738-18.52 4.157-2.404 3.42 2.83 3.492.756 6.048s-12.096 1.512-13.608 1.134c-1.511-.378-2.583-.138-4.157-1.512-1.575-1.374 1.512-9.071-3.78-7.182-5.292 1.89-10.376 3.183-13.607 5.292-3.232 2.109-4.536 5.67-6.048 6.048-1.512.378-36.997-.386-40.443 7.181-3.446 7.568 2.268 7.56 4.535 7.56 2.268 0 13.663-1.952 20.411-3.402 6.748-1.45 14.547-4.58 20.033-5.292 5.486-.712 7.243.105 12.473 0 5.23-.104 11.04.244 18.899-.756 7.858-.999 24.064-1.78 27.97-6.047 3.906-4.268-1.443-3.211.756-6.048 2.2-2.836 12.948-1.766 14.363-5.67z"
            ></path>
          </g>
          <path
            id="path962"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.265"
            d="M152.745-127.621l4.276-1.203 4.41-2.004s-.535-3.341-1.871-3.341h-5.613c-2.004 0-10.022 1.47-11.359 1.87-1.336.401-2.138-.133-2.271-1.47-.134-1.336-.268-4.677-3.876-4.677-3.608 0-13.764 5.747-15.502 5.88-1.737.134-7.75 2.54-8.018 3.876-.267 1.336.936 7.617.936 7.617s5.88 3.207 7.617 3.34c1.737.134 15.1-.4 15.1-.4l11.894-.535s10.557-3.207 11.092-3.073c.534.133 3.074-4.01 2.539-4.41-.535-.401-6.548-1.337-6.548-1.337z"
          ></path>
          <path
            id="path960"
            fill="#d3d3d3"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="0.265"
            d="M157.823-118.133c2.485-2.365 2.055-2.346 1.069-3.876-.987-1.529-4.528-.449-6.816-1.069-2.287-.62-4.824-1.551-6.815-2.672-1.99-1.121-4.41-3.876-5.078-3.876-.668 0-18.977 3.904-21.916 7.35-2.94 3.447-2.18 2.299-.668 4.01 1.51 1.71 7.026-1.097 9.621-.402 2.595.695 3.407 3.214 5.48 3.475 2.071.26 4.083-2.17 5.746-1.871 1.662.298 2.539 3.074 3.207 2.539.668-.535 13.684-1.243 16.17-3.608z"
          ></path>
          <circle
            id="path964"
            cx="170.384"
            cy="-132.031"
            r="1.871"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeWidth="1"
          ></circle>
          <path
            id="path966"
            fill="none"
            stroke="#fff"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="5.292"
            d="M187.222-139.782c-1.202.535-11.76 5.212-11.76 5.212"
            filter="url(#filter968)"
          ></path>
        </g>
      </g>
    </svg>
  );

    </div>)

}

export default Pueblo;