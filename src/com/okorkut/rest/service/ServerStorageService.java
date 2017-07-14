package com.okorkut.rest.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.okorkut.rest.DTO.KullaniciDTO;

public class ServerStorageService {

	private Map<Integer, KullaniciDTO> kullaniciListesi = new HashMap<Integer, KullaniciDTO>();
	private int counter = 1;

	public int kaydet(KullaniciDTO kullaniciDTO) {

		kullaniciDTO.setId(counter);
		kullaniciListesi.put(counter, kullaniciDTO);

		counter++;
		return kullaniciDTO.getId();
	}

	public boolean sil(int id) {

		kullaniciListesi.remove(id);

		return true;
	}

	public KullaniciDTO guncelle(KullaniciDTO kullaniciDTO) {

		kullaniciListesi.put(kullaniciDTO.getId(), kullaniciDTO);

		return kullaniciDTO;
	}

	public KullaniciDTO getKullaniciById(int id) {
		return kullaniciListesi.get(id);
	}

	public List<KullaniciDTO> getKullanicilar() {

		List<KullaniciDTO> dtos = new ArrayList<KullaniciDTO>();

		for (Map.Entry<Integer, KullaniciDTO> entry : kullaniciListesi.entrySet()) {
			KullaniciDTO dto = entry.getValue();
			dtos.add(dto);
		}

		return dtos;
	}

}
