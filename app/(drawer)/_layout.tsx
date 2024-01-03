import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen
      name="index"
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
