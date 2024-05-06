import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width:  1, height: 1 }} />
);

const navConfig = [
  {
    title: ' Priorities',
    path: '/',
   
  },
  {
    title: ' Department',
    path: '/products',
   
  },
  {
    title: 'CS',
    path: '/user',
    icon: icon(''),
  },
  // {
  //   title: 'Create Issues',
  //   path: '/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
