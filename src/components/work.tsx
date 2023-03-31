import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Tabs } from "antd";

const Work = () => {
  const exp = [
    {
      key: "1",
      label: `Mindworks Interactive Sdn. Bhd.`,
      children: (
        <div className="work-item">
          <h3>Software engineer @ Mindworks Interactive</h3>
          <p>Oct 2021 - Feb 2023</p>
          <ul>
            <li>
              Contributed significantly to the development of the award-winning
              cloud kitchen system's backend, which received RM150k from
              Cradlefund
            </li>
            <li>
              Designed and executed the implementation of multi-tenancy
              capabilities with group and membership role-based authorization
            </li>
            <li>
              Integrated with payment and delivery platforms, enabling seamless
              transactions and real-time tracking of orders
            </li>
            <li>
              Successfully developed and deployed an order batching feature that
              improves delivery efficiency and reduces company costs
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: "2",
      label: `Urban Entomology Lab`,
      children: (
        <ul>
          <li>
            <p>Research Assistant</p>
          </li>
        </ul>
      ),
    },
  ];
  return (
    <section>
      <div className="">
        <h2>Work</h2>
        <div>
          <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            style={{ height: 220 }}
            // items={new Array(30).fill(null).map((_, i) => {
            //   const id = String(i);
            //   return {
            //     label: `Tab-${id}`,
            //     key: id,
            //     disabled: i === 28,
            //     children: `Content of tab ${id}`,
            //   };
            // })}
            items={exp}
          />
        </div>
      </div>
    </section>
  );
};

export default Work;
