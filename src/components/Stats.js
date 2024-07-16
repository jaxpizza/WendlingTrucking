import React, { useMemo } from 'react';
import styled from 'styled-components';

const StatsSection = styled.section`
  background-color: var(--light-gray);
  padding: 4rem 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-red);

  span {
    font-size: 1rem;
    display: block;
    color: var(--black);
    margin-top: 0.5rem;
  }
`;

const Stats = () => {
  const stats = useMemo(() => [
    { value: "20+", label: "Years of Experience" },
    { value: "100%", label: "Customer Satisfaction" },
    { value: "24/7", label: "Service Availability" },
    { value: "10+", label: "Counties Served" },
  ], []);

  return (
    <StatsSection>
      <StatsGrid>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            {stat.value}
            <span>{stat.label}</span>
          </StatItem>
        ))}
      </StatsGrid>
    </StatsSection>
  );
};

export default Stats;