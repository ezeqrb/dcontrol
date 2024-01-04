import { Ionicons } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer screenOptions={{ headerShown: true }}>
    <Drawer.Screen
      name="home"
      options={{
        headerTitle: 'Home',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="news"
      options={{
        headerTitle: 'Newsfeed',
        drawerLabel: 'News',
        drawerIcon: ({ size, color }) => <Ionicons name="newspaper-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="employees"
      options={{
        headerTitle: 'Employees',
        drawerLabel: 'Employees',
        drawerIcon: ({ size, color }) => <Ionicons name="person-outline" size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="salary"
      options={{
        headerTitle: 'Salary',
        drawerLabel: 'Salary',
        drawerIcon: ({ size, color }) => <Ionicons name="document-outline" size={size} color={color} />,
      }}
    />
  </Drawer>
);

export default DrawerLayout;
