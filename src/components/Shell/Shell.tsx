import { AppShell, Group, rem, Text } from '@mantine/core';


export default function Shell() {

    const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ullam, ex cum repellat ';

  return (
    <AppShell header={{ height: 60, offset: false }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          Logo
        </Group>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        <Text size="lg" my="md" maw={600} mx="auto">
              {lorem}
        </Text>
      </AppShell.Main>
    </AppShell>
  )
}
