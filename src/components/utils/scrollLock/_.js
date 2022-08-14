// ToDo store styles and restore
// document.body.style.getPropertyValue('left')

export default () => ({
  disableScroll() {
    if( document.body.hasAttribute( 'data-scroll-position' ) )
        return;
  
    const pagePosition = window.scrollY;
    document.body.dataset.scrollPosition = pagePosition;
  
    Object.assign( document.body.style, {
        left        : 0,
        top         : `-${ pagePosition }px`,
        width       : '100%',
        position    : 'fixed',
        height      : '100vh',
        overflow    : 'hidden',
    });
  },
  
  enableScroll() {
    if( !document.body.hasAttribute( 'data-scroll-position' ) )
        return;
  
    const pagePosition	= parseInt( document.body.dataset.scrollPosition, 10 );
  
    [ 'left', 'top', 'width', 'position', 'height', 'overflow' ].forEach( propName => document.body.style.removeProperty( propName ) );
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute( 'data-scroll-position' );
  }
})