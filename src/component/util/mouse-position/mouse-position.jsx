// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { setMonkeyCoordinateAction } from "../../../store/monkey/monkey.action";

// const useMousePosition = () => {
//   const dispatch = useDispatch();
//   // const [mousePosition, setMousePosition] = useState({ x: -20, y: -20 });

//   useEffect(() => {
//     // const setFromEvent = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
//     const setFromEvent = (e) => {
//       if (e.clientY > 46 && e.clientY < 600 && e.clientX > 400 && e.clientX < 1200) {
//         dispatch(setMonkeyCoordinateAction(({ x: e.clientX, y: e.clientY })));
//       } else {
//         dispatch(setMonkeyCoordinateAction())
//         alert('Please place item on the map')
//       }
//     }
//     window.addEventListener("click", setFromEvent);
//     // 'click'/'mousemove'

//     return () => {
//       window.removeEventListener("click", setFromEvent);
//     };
//   }, []);

//   // return mousePosition;
// };

// export { useMousePosition };