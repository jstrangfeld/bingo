import { Select, Text } from "@mantine/core";

import { useState } from "react";

export default function Rules() {
  const [rules, setRules] = useState<string | null>("One line (standard)");
  return (
    <>
      <Text size="lg" fw="bold">
        Game Rules:
      </Text>
      <Select
        variant="transparent"
        size="xl"
        data={[
          "One line (standard)",
          "Two lines",
          "Four corners",
          "Giant U",
          "Giant M",
          "Giant X",
          "Giant H",
          "Outside",
          "Full House (Cover all)",
        ]}
        defaultValue="One line (standard)"
        onChange={(val) => {
          setRules(val);
        }}
      />
      <Text style={{ letterSpacing: "-.4rem", lineHeight: 1 }} size="xs">
        {rules === "One line (standard)" ? (
          <pre>
            🔸🔸🔸🔸🔸
            <br />
            🔸🔸🔸🔸🔸
            <br />
            🟨🟨🟨🟨🟨
            <br />
            🔸🔸🔸🔸🔸
            <br />
            🔸🔸🔸🔸🔸
          </pre>
        ) : null}
        {rules === "Two lines" ? (
          <pre>
            🔸🟨🔸🔸🔸
            <br />
            🔸🟨🔸🔸🔸
            <br />
            🟨🟨🟨🟨🟨
            <br />
            🔸🟨🔸🔸🔸
            <br />
            🔸🟨🔸🔸🔸
          </pre>
        ) : null}
        {rules === "Four corners" ? (
          <pre>
            🟨🔸🔸🔸🟨
            <br />
            🔸🔸🔸🔸🔸
            <br />
            🔸🔸🔸🔸🔸
            <br />
            🔸🔸🔸🔸🔸
            <br />
            🟨🔸🔸🔸🟨
          </pre>
        ) : null}
        {rules === "Giant U" ? (
          <pre>
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🟨🟨🟨🟨
          </pre>
        ) : null}
        {rules === "Giant M" ? (
          <pre>
            🟨🔸🔸🔸🟨
            <br />
            🟨🟨🔸🟨🟨
            <br />
            🟨🔸🟨🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
          </pre>
        ) : null}
        {rules === "Giant X" ? (
          <pre>
            🟨🔸🔸🔸🟨
            <br />
            🔸🟨🔸🟨🔸
            <br />
            🔸🔸🟨🔸🔸
            <br />
            🔸🟨🔸🟨🔸
            <br />
            🟨🔸🔸🔸🟨
          </pre>
        ) : null}
        {rules === "Giant H" ? (
          <pre>
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🟨🟨🟨🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
          </pre>
        ) : null}
        {rules === "Outside" ? (
          <pre>
            🟨🟨🟨🟨🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🔸🔸🔸🟨
            <br />
            🟨🟨🟨🟨🟨
          </pre>
        ) : null}
        {rules === "Full House (Cover all)" ? (
          <pre>
            🟨🟨🟨🟨🟨
            <br />
            🟨🟨🟨🟨🟨
            <br />
            🟨🟨🟨🟨🟨
            <br />
            🟨🟨🟨🟨🟨
            <br />
            🟨🟨🟨🟨🟨
          </pre>
        ) : null}
      </Text>
    </>
  );
}
