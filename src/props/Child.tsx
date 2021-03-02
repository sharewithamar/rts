import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}
//ts doesn know this is as react component, cant use proptypes,displayname etc , cant use children
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//this syntax allows us to use react component properties like proptypes,displayname
//allows to use props.children
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
