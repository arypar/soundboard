import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background border-t border-border">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          By Aryan Parekh
        </p>
      </div>
    </footer>
  );
};

export default Footer;
