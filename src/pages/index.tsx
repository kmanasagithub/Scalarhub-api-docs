import React from 'react';
import { Redirect } from '@docusaurus/router';
// import  Link  from '@docusaurus/Link';

// // Named export for SidebarItem component
// export function SidebarItem({ method, label, to }) {
//   const methodStyles = {
//     GET: { backgroundColor: 'blue', color: 'white' },
//     POST: { backgroundColor: 'green', color: 'white' },
//     PUT: { backgroundColor: 'lightblue', color: 'white' },
//     DEL: { backgroundColor: 'red', color: 'white' },
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
//       <span
//         style={{
//           ...methodStyles[method],
//           padding: '4px 8px',
//           borderRadius: '4px',
//           marginRight: '8px',
//         }}
//       >
//         {method}
//       </span>
//       <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
//         {label}
//       </Link>
//     </div>
//   );
// }

// Default export for Home component
export default function Home(): JSX.Element {
  return <Redirect to="/guides/Overview" />;
}
