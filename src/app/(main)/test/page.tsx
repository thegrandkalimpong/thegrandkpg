import React from "react";

const TestPage = () => {
    return <div className="min-h-[200vh] bg-amber-200"></div>;
};

const GridChild = ({ className }: { className?: string }) => {
    return (
        <div className={`bg-red-500 ${className}`}>
            <p className="text-white">Grid Child</p>
        </div>
    );
};

export default TestPage;
