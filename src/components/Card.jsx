const Card = ({ children, primaryColor, first = '', last='' }) => {
  const otherClasses = [];
  if (first) {
    otherClasses.push('rounded-tl-lg');
    otherClasses.push('rounded-tr-lg');
    otherClasses.push('halfxl:rounded-l-lg');
    otherClasses.push('halfxl:rounded-r-none');
  }
  if (last) {
    otherClasses.push('rounded-bl-lg');
    otherClasses.push('rounded-br-lg');
    otherClasses.push('halfxl:rounded-r-lg');
    otherClasses.push('halfxl:rounded-l-none');
  }
  return (
    <div className={`bg-primary-${primaryColor} p-12 ${otherClasses.join(' ')}`}>
      {children}
    </div>
  );
}

export default Card;
