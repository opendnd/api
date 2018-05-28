import React from 'react';
import { Grid } from 'material-ui';

import { RegularCard, Table, ItemGrid } from 'components';

function Names({ ...props }) {
  return (
    <Grid container>
      <ItemGrid xs={12} sm={12} md={12}>
        <RegularCard
          cardTitle='Themes'
          cardSubtitle='Here are the themes available for your names'
          content={
            <Table
              tableHeaderColor='primary'
              tableHead={['Theme', 'Male Names', 'Female Names', 'Domain Names']}
              tableData={[
                [
                  'Classical',
                  'Atticus, Augustus, Cassius, Cato, Cyprian, Felix, Julius, Justus, Lucius, Magnus, Marcus, Maximus, Octavius, Philo, Remus, Rufus, Septimus, Tiberius, Urban',
                  'Aeliana, Antonia, Augusta, Aurelia, Camilla, Cassia, Cecilia, Decima, Drusilla, Flavia, Florentina, Junia, Laelia, Laurentia, Livia, Marilla, Octavia, Priscilla, Sabina, Tanaquil, Tatiana, Tullia, Valentina, Vita',
                  'Rome, Ariminum, Belum, Pompeii, Forum, Genava, Capua, Dyrrachium, Spalatum, Trapezus, Nauportus, Nicomedia, Nicaea, Mediolanum, Barium, Patavium, Nicomedia, Neviodunum, Constantinopolis, Abdera, Aegae, Heraclea, Ithaca, Kallipolis, Neapolis',
                ],
              ]}
            />
          }
        />
      </ItemGrid>
    </Grid>
  );
}

export default Names;
